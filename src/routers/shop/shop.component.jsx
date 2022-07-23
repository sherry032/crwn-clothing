import { useEffect } from "react"
import {Routes, Route} from "react-router-dom"
import { useDispatch } from "react-redux/es/exports"
import CategoriesPreview from "../categories-preview/categories-preview.componenet"
import Category from "../category/category.component"
import { setLoading } from "../../store/products/products.action"
const Shop = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setLoading())
      },[dispatch])
   
    return(
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category"  element={<Category />}/>
        </Routes>
    )
}

export default Shop