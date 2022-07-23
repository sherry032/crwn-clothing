import {Routes, Route} from "react-router-dom"
import {useEffect} from "react"
import { useDispatch } from "react-redux"
// import {onAuthStateChangedListenser, createUserDocumentFromAuth, getCurrentUser} from "./utils/firebase/firebase.utils"
// import {setCurrentUser} from "./store/user/user.action"
import { checkUserSession } from "./store/user/user.action"
import Navigation from "./routers/navigation/navigation.component";
import Home from "./routers/home/home.component";
import Authentication from "./routers/authentication/authentication.component"
import Shop from "./routers/shop/shop.component";
import Checkout from "./components/checkout/checkout.component";

const App =()=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    // const unsubscribe = onAuthStateChangedListenser(async(user)=>{
    //     if(user){
    //         await createUserDocumentFromAuth(user)
    //     }
    //     dispatch(setCurrentUser(user))
    // })
    // return unsubscribe
    dispatch(checkUserSession())
},[dispatch])



  return(
    <Routes>
      <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop/>}/>
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;
