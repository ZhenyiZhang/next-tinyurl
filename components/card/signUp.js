import isEmail from 'isemail';

import Button from '../buttons/button';

import {useForm} from 'react-hook-form';
import {StyledContainer, StyledForm, StyledFormGroup, StyledLabel, StyledInput, StyledText }from './styles/signUp';


export default function SignUpForm() {
    const {register, handleSubmit, errors, setError} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    //@note: how to put error message when validate
    const validateEmail = (email) => {
        // if(!isEmail.validate(email)) {
        //     setError('email', {
        //         type: 'validate',
        //         message: 'invalid email'
        //     });
        //     return false;
        // }
        // return true;
        return isEmail.validate(email);
    };

    return (
        <StyledContainer>
            <StyledText textAlign="center" m="auto">Pocket MD Logo</StyledText>

            <StyledForm>
                <StyledText margin={20} width="70%" fontSize={30}>Sign up</StyledText>
            </StyledForm>

            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledFormGroup>
                    <StyledLabel>Email</StyledLabel>
                    <StyledInput
                        name="email"
                        type="text"
                        placeholder="example.email@gmail.com"
                        ref={register({required: true, validate: validateEmail})}/>
                    {errors.email && <p style={{"color": "red"}}>email address is invalid</p>}
                </StyledFormGroup>

                <StyledFormGroup>
                    <StyledLabel>Your Name</StyledLabel>
                    <StyledFormGroup height="100%" width="100%" display="flex" justifyContent="space-between">
                        <StyledInput
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            ml='0px'
                            ref={register({required: true})}/>
                        <StyledInput
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            mr='0px'
                            ref={register({required: true})}/>
                    </StyledFormGroup>
                    {(errors.firstName?.type === 'required' || errors.lastName?.type === 'required')
                    && <p style={{"color": "red"}}>first/last name is required</p>}
                </StyledFormGroup>

                <StyledFormGroup>
                    <StyledLabel>Password</StyledLabel>
                    <StyledInput
                        name="password"
                        type="password"
                        placeholder="Create Password"
                        ref={register({required: true})}/>
                    {errors.password?.type === 'required' && <p style={{"color": "red"}}>password is required</p>}
                </StyledFormGroup>

                <Button type="submit" primaryPurple round medium>Continue</Button>
            </StyledForm>
        </StyledContainer>
    );
}