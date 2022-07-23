import ProductCard from "../../components/product-card/product-card.component"
import {  useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { useSelector } from "react-redux/es/exports"
// import { ProductsContext } from "../../contexts/products.context"
import { selectIsLoading, selectProducts} from "../../store/products/products.selector"
import Spinner from "../../components/spinner/spinner.component"
import {Title, Preview} from "../../components/category-preview/category-preview.styles"
import { CategoryContainer } from "./category.styles"
const Category = ()=>{
    const {category} = useParams()
    // const {products}= useContext(ProductsContext)
    const products = useSelector(selectProducts)
    const isLoading = useSelector(selectIsLoading)
    const [categoryProducts, setCategoryProducts] = useState(products[category])
    useEffect(()=>{
        setCategoryProducts(products[category])
    },[products, category])

    return(
        <CategoryContainer>
            <h2><Title as="span">{category.toUpperCase()}</Title></h2>
            {isLoading ? <Spinner /> : (<Preview> 
                {categoryProducts && categoryProducts.map((product)=>(
                 <ProductCard key={product.id} product={product}/>
                ))}
            </Preview>)}
        </CategoryContainer>
    )
}

export default Category