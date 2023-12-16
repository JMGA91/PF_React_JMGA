import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useGetProducts } from "../hooks/useProduct";

const ItemDetailContainer = () => {
    const { productsData } = useGetProducts(10);

    return <ItemListContainer productsData={productsData} />
}

export default ItemDetailContainer;