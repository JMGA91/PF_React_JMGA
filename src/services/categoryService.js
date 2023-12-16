import axios from "axios";

export async function getCategory (category = 'smartphones') {
    return await axios.get(`https://dummyjson.com/products/category/${category}`)
}