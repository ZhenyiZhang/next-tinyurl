import styled from 'styled-components';

import sizes from '../../lib/constants/screen-sizes/sizes'

import {color, space} from 'styled-system';

const StyledContainer = styled.div`
    position: relative;
    top: 25%;
    left: 8%;
    z-index: 2;
    @media screen and (max-width: ${sizes.maxMobileWidth}) {
        top: 5%;
    }
`;

const StyledHeader = styled.div`
    ${color};
    font-size: 40px;
`;

const StyledText = styled.div`
    ${color};
    font-size: 20px;
    @media (min-width: 1400px) {
        font-size: 25px;
    }
`;

const StyledLine = styled.div`
    ${space};
    display: flex;
`;

export default function Welcome() {
    return(
        <StyledContainer>
            <StyledLine mb={30}>
                <StyledHeader color="white">
                    Welcome to&nbsp;
                </StyledHeader>

                <StyledHeader color="#fdad5c">
                    PocketMD
                </StyledHeader>
            </StyledLine>

            <StyledLine ml={35}>
                <StyledText color="white">
                    Create a <b>free account</b> to get 24/7 access to
                </StyledText>
            </StyledLine> <br/>

            <StyledLine ml={50}>
                <StyledText color="white">
                    a doctor from the comfort of your home
                </StyledText>
            </StyledLine>
        </StyledContainer>
    );
}