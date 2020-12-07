import styled from 'styled-components';

import Welcome from '../components/text/welcome';
import CurvedBackground from '../components/svg/background';
import SignUpForm from '../components/card/signUp'

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(150px, 50%) 1fr;
    height: 100vh;
    width: 100vw;
`;

const StyledLeftSection = styled.section`
`;

const StyledRightSection = styled.section`
    display: grid;
    place-items: center;
`;

export default function background() {
    return(
        <StyledContainer>
            <StyledLeftSection>
                <CurvedBackground/>
                <Welcome/>
            </StyledLeftSection>
            <StyledRightSection>
                <SignUpForm/>
            </StyledRightSection>
        </StyledContainer>
    );
}