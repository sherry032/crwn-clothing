
import {FormInputLabel, Group, FormInputInput} from "./form-input.styles"

const FormInput = ({label, ...otherProps})=>{
    return(
        <Group>
            <FormInputInput {...otherProps}/>
            {label && (<FormInputLabel shrink={`${otherProps.value.length ? "shrink" : ""}`}>{label}</FormInputLabel>)}
        </Group>
    )
}

export default FormInput