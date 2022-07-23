import { Fragment } from "react"
import { useSelector } from "react-redux/es/exports"
// import { ProductsContext } from "../../contexts/products.context"
import { selectIsLoading, selectProducts} from "../../store/products/products.selector"
import Spinner from "../../components/spinner/spinner.component"
import CategoryPreview from "../../components/category-preview/category-preview.conponent"

const CategoriesPreview = ()=>{
    const products= useSelector(selectProducts)
    const isLoading = useSelector(selectIsLoading)
    return(
        <Fragment>
            {isLoading ?  <Spinner /> : (Object.keys(products).map(title =>{
                return(<CategoryPreview key={title} title={title} products={products[title]}/>)}))}
        </Fragment>
    )
}

export default CategoriesPreview