
import {CategoryContainer, CategoryBodyContainer, BackgroundImage} from "./category-item.styles"
const CategoryItem = ({category})=>{
    const {imageUrl, title} = category
    // const navigation = useNavigate()
    // const categoryClickHandler = ()=>{
    //   navigation(`/shop/${title.toLowerCase()}`)
    // }
    return(

        <CategoryContainer to={`/shop/${title.toLowerCase()}`} >
        <BackgroundImage imageUrl={imageUrl}/>
        <CategoryBodyContainer>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </CategoryBodyContainer>
      </CategoryContainer>
    )
}

export default CategoryItem