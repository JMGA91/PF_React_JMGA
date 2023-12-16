import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { useGetCategory } from "../hooks/useCategory";

const Category = () => {
    const { categoryData } = useGetCategory('laptops');

    return <ItemListContainer productsData={categoryData} />
}

export default Category;