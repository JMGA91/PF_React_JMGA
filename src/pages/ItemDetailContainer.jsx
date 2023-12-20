import { useGetSingleProduct } from "../hooks/useSingleProduct";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
	const productId = useParams().id;
    const { singleProductData } = useGetSingleProduct(productId);

    return (
		<div style={{width:'min(100%, 1024px)', paddingTop:'60px', margin: '0 auto'}}>
			<p>Hello item {productId}!</p>
			<p>title: {singleProductData.title}!</p>
			<p>description: {singleProductData.description}!</p>
			<p>With a <strong>discount</strong> of <strong>{singleProductData.discountPercentage}%</strong>, this item cost <strong>${singleProductData.price} only!</strong></p>
		</div>
	)
}

export default ItemDetailContainer;