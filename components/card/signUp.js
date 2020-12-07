import styled from 'styled-components';

import Button from '../buttons/button';
import sizes from '../../lib/constants/screen-sizes/sizes';

import {layout, flexbox, space, typography} from 'styled-system';

const StyledContainer = styled.div`
    border-radius: 30px;
    box-shadow: 1px 1px 20px rgba(96, 109, 218, 0.5);
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    height: 70%;
    width: 60%;
    z-index: 2;
    @media (max-width: ${sizes.maxMobileWidth}) {
        background: white;
    }
`;

const StyledForm = styled.form`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-Start;
    width: 100%;
    height: 100%;
`;

const StyledFormGroup = styled.div`
    width: 70%;
    height: 20%;
    ${layout};
    ${flexbox};
`;

const StyledLabel = styled.label`
    font-size: 15px;
`;

const StyledInput = styled.input`
    border: 1px solid #D3D3D3;
    border-radius: 2px;
    height: 40%;
    padding-left: 10px;
    margin: 5px;
    width: 100%;
    &:focus {outline: none;}
    ${layout};
    ${space};
`;

const StyledText = styled.div`
    ${space}
    ${layout}
    ${typography};
`;


export default function SignUpForm() {
    return (
        <StyledContainer>
            <StyledText textAlign="center" m="auto">Pocket MD Logo</StyledText>

            <StyledForm>
                <StyledText margin={20} width="70%" fontSize={30}>Sign up</StyledText>
            </StyledForm>

            <StyledForm>
                <StyledFormGroup>
                    <StyledLabel>Email</StyledLabel>

                    <StyledInput type="text" placeholder="example.email@gmail.com"/>
                </StyledFormGroup>

                <StyledFormGroup>
                    <StyledLabel>Your Name</StyledLabel>

                    <StyledFormGroup height="100%" width="100%" display="flex" justifyContent="space-between">
                        <StyledInput type="text" placeholder="First Name" ml='0px'/>
                        <StyledInput type="text" placeholder="Last Name" mr='0px'/>
                    </StyledFormGroup>
                </StyledFormGroup>

                <StyledFormGroup>
                    <StyledLabel>Password</StyledLabel>
                    <StyledInput type="text" placeholder="Create Password"/>
                </StyledFormGroup>

                <Button primaryPurple round medium>Continue</Button>
            </StyledForm>
        </StyledContainer>
    );
}