import { useState} from "react"
import { useDispatch } from "react-redux/es/exports"
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action"
// import {signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"
import {SignInContainer} from "./sign-in-form.styles"
const SignInForm = ()=>{
    const dispatch = useDispatch()
    const defaultFormFields={
        email: "",
        password:""
    }
    const [formFields, setFormFields]= useState(defaultFormFields)
    const {email, password} = formFields
    const resetFormFields = ()=>{
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            dispatch(emailSignInStart(email, password))
            // await signInAuthUserWithEmailAndPassword(email, password)
        }catch(err){
            switch(err.code){
                case "auth/user-not-found":
                    alert("user not found");
                    break;
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;
                default:
                    console.log(err)
            }
        }
        resetFormFields()
    }
    const handleChange = (event)=>{
        const {name, value} = event.target
        setFormFields({...formFields, [name]:value})
    }

    const signInWithGoogle = ()=>{
        // await signInWithGooglePopup()
        dispatch(googleSignInStart())
    }

    return(
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="email" required onChange={handleChange} name="email" id="email" value={email} label="Email"/>
                <FormInput type="password" required onChange={handleChange} name="password" id="password" value={password} label="Password"/>
                <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </SignInContainer>
    )
}

export default SignInForm