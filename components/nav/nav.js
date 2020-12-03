import styled from 'styled-components'

const A = styled.a`
    cursor: pointer;
    &:hover {
    opacity: 0.5
    }
`;

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    height: 5vh;
    justify-content: center;
    padding: 5px;
    width: 100vw;
    & > A {
    margin-left: 10px;
    }
`;

export {Nav, A};