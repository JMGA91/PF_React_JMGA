import { useState, useEffect } from "react";
import { getProducts } from "../services";

export const useGetProducts = (limit) => {
    const [productsData, setProductsData] = useState([]);

    /* console.log(`productsData en hook: `, productsData); */

    useEffect (() => {
        getProducts(limit)
            .then ((response) =>{
                setProductsData(response.data.products)
            })
            .catch((error) => {
                console.log(error);
            })
    },[]);

    return { productsData };
}