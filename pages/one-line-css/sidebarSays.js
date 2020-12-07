import styled from 'styled-components';

const Sidebar = styled.div`
    background: #E87574;
`;

const Main = styled.div`
    background: #0070f3;
`;

const Container = styled.div`
    display: grid;
    //the first column would be applied with minmax and
    //the second would fill the rest automatically
    grid-template-columns: minmax(150px, 25%) 1fr;
    height: 100vh;
    width: 100vw;
`;

export default function SidebarSays() {
    return(
        <Container>
            <Sidebar/>
            <Main/>
        </Container>
    );
}