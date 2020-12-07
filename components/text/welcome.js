import styled from 'styled-components';

import {color, typography, layout, space} from 'styled-system';

const StyledContainer = styled.div`
    position: relative;
    top: 25%;
    left: 8%;
    z-index: 2;
`;

const StyledText = styled.div`
    ${color};
    ${typography};
    ${layout};
`;

const StyledLine = styled.div`
    ${space};
    display: flex;
`;

export default function Welcome() {
    return(
        <StyledContainer>
            <StyledLine mb={30}>
                <StyledText color="white" fontSize={40}>
                    Welcome to&nbsp;
                </StyledText>
                <StyledText color="#fdad5c" fontSize={40}>
                    PocketMD
                </StyledText>
            </StyledLine>
            <StyledLine ml={35}>
                <StyledText color="white" fontSize={23}>
                    Create a <b>free account</b> to get 24/7 access to
                </StyledText>
            </StyledLine>
            <br/>
            <StyledLine ml={50}>
                <StyledText color="white" fontSize={23}>
                    a doctor from the comfort of your home
                </StyledText>
            </StyledLine>
        </StyledContainer>
    );
}