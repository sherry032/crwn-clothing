
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import {AuthenticationContainer} from "./authentication.styles"

const Authentication=()=>{
    // useEffect(()=>{
    //     getRedirectResult(auth).then(res=>{
    //         if(res){
    //     return createUserDocumentFromAuth(res.user)
    //         }
    //     }).then(userDocRef => console.log(userDocRef))
        
    // },[])
    

    return(
        <AuthenticationContainer>
        <SignInForm />
        <SignUpForm />
        </AuthenticationContainer>
    )
}

export default Authentication