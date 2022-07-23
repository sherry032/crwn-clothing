import {all, call} from "redux-saga/effects"
import { productsSaga } from "./products/products.saga"
import { userSagas } from "./user/user.saga"
export function* rootsaga(){
    yield all([call(productsSaga), call(userSagas)])
}