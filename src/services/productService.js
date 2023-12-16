import axios from "axios";

export async function getProducts (limit = 12) {
    return await axios.get(`https://dummyjson.com/products?limit=${limit}`)
}