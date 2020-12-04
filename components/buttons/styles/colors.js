import {css} from 'styled-components';

/*common colors style for buttons*/
const colors = css`
    ${props => props.primaryBlue && css`
        background: #606DDA;
        border: 2px solid #606DDA;
        color: #606DDA
    `}
    
    ${props => props.lightRed && css`
        background: #E87574;
        border: 2px solid #E87574;
        color: #E87574
    `}
    
    
    ${props => props.darkRed && css`
        background: #E05658;
        border: 2px solid #E05658;
        color: #E05658
    `}
    
    ${props => props.primaryTeal && css`
        background: #92F0D4;
        border: 2px solid #92F0D4;
        color: #92F0D4
    `}
    
    ${props => props.primaryBlueDark && css`
        background: #4C58BC;
        border: 2px solid #4C58BC;
        color: #4C58BC
    `}
    
    ${props => props.primaryPurple && css`
        background: #8D76E1;
        border: 2px solid #8D76E1;
        color: #8D76E1
    `}
`;

export default colors;