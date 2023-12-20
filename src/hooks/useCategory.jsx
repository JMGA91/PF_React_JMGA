import { useState, useEffect } from "react";
import { getCategory } from "../services";

export const useGetCategory = (category) => {
    const [categoryData, setCategoryData] = useState([]);

    /* console.log(`categoryData en hook: `, categoryData); */

    useEffect (() => {
        getCategory(category)
            .then ((response) =>{
                // console.log(`response.data: `, response.data);
                
                setCategoryData(response.data.products)
            })
            .catch((error) => {
                console.log(error);
            })
    },[]);

    return { categoryData };
}