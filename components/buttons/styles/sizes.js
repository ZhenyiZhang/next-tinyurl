import {css} from 'styled-components';

/*common sizes styles for Button*/
const sizes = css`
    ${props => props.small && css`
        border-radius: 5px;
        font-size: 20px;
        height: 40px;
        width: 120px;
    `}
    
    ${props => props.medium && css`
        border-radius: 5px;
        font-size: 20px;
        height: 50px;
        width: 150px;
    `}
    
    ${props => props.large && css`
        border-radius: 5px;
        font-size: 20px;
        height: 60px;
        width: 180px;
    `}
`;

export default sizes;