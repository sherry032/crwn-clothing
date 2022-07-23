// import { createContext, useState, useEffect } from "react";

// import { addCollectionAndDocumnets, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils"

// export const ProductsContext= createContext({
//     products:[],
//     setProducts:()=>{}
// })

// export const ProductsProvider = ({children})=>{
//     const [products, setProducts]= useState([])
//     // useEffect(()=>{
//     //     addCollectionAndDocumnets("categories", SHOP_DATA)
//     // }, [])
//     useEffect(()=>{
//         const getCategoriesMap = async()=>{
//             const categoryMap = await getCategoriesAndDocuments("categories")
//             setProducts(categoryMap)
//         }
//         getCategoriesMap()
//     },[])

//     return(
//         <ProductsContext.Provider value={{products, setProducts}}>{children}</ProductsContext.Provider>
//     )
// }