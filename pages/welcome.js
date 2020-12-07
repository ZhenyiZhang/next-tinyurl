import styled from 'styled-components';

import WelcomeText from '../components/text/welcome';
import Background from '../components/svg/background';
import SignUpForm from '../components/card/signUp'
import sizes from '../lib/constants/screen-sizes/sizes'

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    overflow: hidden;
    width: 100vw;
    @media (max-width: ${sizes.maxMobileWidth}) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
    }
`;

const StyledGridSection = styled.section`
    display: grid;
    place-items: center;
`;

export default function welcome() {
    return(
        <StyledContainer>
            <Background/>
            <section>
                <WelcomeText/>
            </section>
            <StyledGridSection>
                <SignUpForm/>
            </StyledGridSection>
        </StyledContainer>
    );
}