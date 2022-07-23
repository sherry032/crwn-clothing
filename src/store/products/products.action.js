import {PRODUCTS_ACTION_TYPES } from "./products.types"
// import { getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils"
export const setProducts = (products)=>{
   return{
        type:PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
        payload:products}
}

export const setLoading = ()=>{
        return {
                type:PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START
        }
}

export const setError = (error)=>{
        return {
                type:PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED,
                payload: error
        }
}

// export const fetchProductsAsync = () => async (dispatch) =>{
//            dispatch(setLoading())
//         try{
//                 const categoriesArray = await getCategoriesAndDocuments("categories")
//                 dispatch(setProducts(categoriesArray))
//             }catch(error){
//                 dispatch(setError(error.message))
//             }
// }