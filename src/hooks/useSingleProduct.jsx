import { useState, useEffect } from "react";
import { getSingleProduct } from "../services";

export const useGetSingleProduct = (productId) => {
    const [singleProductData, setSingleProductData] = useState([]);

    useEffect (() => {
        getSingleProduct(productId)
            .then ((response) =>{
                
                setSingleProductData(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    },[]);

    return { singleProductData };
}