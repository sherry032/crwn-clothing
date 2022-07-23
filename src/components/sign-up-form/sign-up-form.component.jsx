import { async } from "@firebase/util"
import { useState} from "react"
import FormInput from "../form-input/form-input.component"
// import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import { useDispatch } from "react-redux"
import { signUpStart} from "../../store/user/user.action"
import Button from "../button/button.component"
import {SignUpContainer} from "./sign-up-form.styles"

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = ()=>{
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields
    const dispatch = useDispatch()
    const resetFormFields = ()=>{
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(password !== confirmPassword) {
            alert("passwords do not match")
            resetFormFields()
            return
        }

        try{
            // const {user} = await createAuthUserWithEmailAndPassword(email, password)

            // if(!user) {
            //     resetFormFields()
            //     return
            // }
            // await createUserDocumentFromAuth(user, {displayName})
            dispatch(signUpStart(email, password, displayName));
        }catch(err){
            if(err.code ==="auth/email-already-in-use"){
                alert("Cannot create user, email alreay in use")
            }
        }
        
        resetFormFields()
    }
    const handleChange=(event)=>{
        const {name, value} = event.target
        setFormFields({...formFields, [name]:value})
    }


    return(
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="displayName" type="text" value={displayName} label="Display Name" onChange={handleChange}/>
                <FormInput type="email" required onChange={handleChange} name="email" value={email} label="Email"/>
                <FormInput type="password" required onChange={handleChange} name="password" value={password} label="Password"/>
                <FormInput type="password" required onChange={handleChange} name="confirmPassword" id="confirmPassword" value={confirmPassword} label="Confirm Password"/>
                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm