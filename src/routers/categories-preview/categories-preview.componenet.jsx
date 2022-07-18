import {  useContext, Fragment } from "react"
import { ProductsContext } from "../../contexts/products.context"
import CategoryPreview from "../../components/category-preview/category-preview.conponent"

const CategoriesPreview = ()=>{
    const {products}= useContext(ProductsContext)

    return(
        <Fragment>
            {Object.keys(products).map(title =>{
                return(<CategoryPreview key={title} title={title} products={products[title]}/>)})}
        </Fragment>
    )
}

export default CategoriesPreview