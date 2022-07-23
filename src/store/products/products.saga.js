import { takeLatest, all, call, put} from "redux-saga/effects"

import { getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils"
import { setProducts, setError } from "./products.action"
import { PRODUCTS_ACTION_TYPES } from "./products.types"


// export const fetchProductsAsync = () => async (dispatch) =>{
//     dispatch(setLoading())
//  try{
//          const categoriesArray = await getCategoriesAndDocuments("categories")
//          dispatch(setProducts(categoriesArray))
//      }catch(error){
//          dispatch(setError(error.message))
//      }
// }

export function* fetchProductsAsync(){
    try{
        const categoriesArray = yield call(getCategoriesAndDocuments, "categories")
        yield put(setProducts(categoriesArray))
    }catch(error){
        yield put(setError(error.message))
    }
}

export function* onFetchProducts(){
    yield takeLatest(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START, fetchProductsAsync)
}

export function* productsSaga(){
    yield all([call(onFetchProducts)])
}

