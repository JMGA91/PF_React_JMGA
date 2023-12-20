import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useGetCategory } from "../hooks/useCategory";
import { useParams } from "react-router-dom";

const Category = () => {
	const categoryId = useParams().id;

    const { categoryData } = useGetCategory(categoryId);

    return <ItemListContainer productsData={categoryData} />
}

export default Category;