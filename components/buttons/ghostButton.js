import styled from 'styled-components';
import sizes from './styles/sizes';
import colors from './styles/colors';

const GhostButton = styled.button`
    ${sizes};
    ${colors};
    background: transparent;
    padding: 0.25em 1em;
    margin: 0.5em 1em;
    text-align: center;
`;

export default GhostButton;