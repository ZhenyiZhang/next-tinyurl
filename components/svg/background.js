import styled from 'styled-components';

import sizes from '../../lib/constants/screen-sizes/sizes';

const StyledContainer = styled.div`
    height: 100%;
    left: 0;
    overflow: hidden;
    position: Absolute;
    top: 0;
    width: 100%;
    z-index: initial;
    @media (min-width: ${sizes.maxMobileWidth}) {
        width: 50%;
    }
`;

export default function CurvedBackground() {
    const path = "M 0 0 L 500 0 " +
        "Q 480 300, 350 450 " +
        "Q 270 555, 275 750 " +
        "Q 300 1100, 250 1250 " +
        "Q 500 1250, 200 1250 " +
        "L 0 1250 z";
    return(
        <StyledContainer>
            <svg viewBox='0 0 500 1250'>
                <path fill='#606DDA' d={path}/>
            </svg>
        </StyledContainer>
    );
}