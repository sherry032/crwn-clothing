import ProductCard from "../../components/product-card/product-card.component"
import {  useContext, useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { ProductsContext } from "../../contexts/products.context"
import {CategoryPreviewContainer, Title, Preview} from "../../components/category-preview/category-preview.styles"

const Category = ()=>{
    const {category} = useParams()
    const {products}= useContext(ProductsContext)
    const [categoryProducts, setCategoryProducts] = useState(products[category])
    useEffect(()=>{
        setCategoryProducts(products[category])
    },[products, category])

    return(
        <CategoryPreviewContainer>
            <h2><Title as="span">{category.toUpperCase()}</Title></h2>
            <Preview> 
                {categoryProducts && categoryProducts.map((product)=>(
                 <ProductCard key={product.id} product={product}/>
                ))}
            </Preview>
        </CategoryPreviewContainer>
    )
}

export default Category