import styled from 'styled-components'

const Header = styled.div`
    background: #E87574;
`;

const Main = styled.div`
    background: #0070f3;
`;

const Footer = styled.div`
    background: #eaeaea;
`;

const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
`;

export default function PancakeStack() {
    return(
        <Container>
            <Header>Header</Header>
            <Main/>
            <Footer>Footer</Footer>
        </Container>
    );
}
