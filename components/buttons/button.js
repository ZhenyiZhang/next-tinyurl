import styled, {css}from 'styled-components';
import sizes from './styles/sizes';
import colors from './styles/colors';

const Button = styled.button`
    ${sizes};
    ${colors};
    /*if has transparent in props
    make background transparent, if
    not make text color white
     */
    ${props => props.transparent ?
        css`background: transparent;`: 
        css`color: white`};
    ${props => props.round && css`
        border-radius: 50px;
    `};
    ${props => props.shadow && css`
        box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5);
    `};
    padding: 0.25em 1em;
    margin: 0.5em 1em;
    text-align: center;
    transition: 0.3s;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    &:focus {outline: none;}
    &:hover{opacity: 0.5;}
    //must after hover
    &:active {opacity: 1}
`;

export default Button;