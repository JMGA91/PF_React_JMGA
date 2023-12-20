import axios from "axios";

export async function getSingleProduct (id = 1) {
	let result = await axios.get(`https://dummyjson.com/products/${id}`);
	
    
    return result
}