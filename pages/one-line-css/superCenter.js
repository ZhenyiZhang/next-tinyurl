import styled from 'styled-components';

const Card = styled.div`
    background: black;
    height: 400px;
    width: 300px;
`;

const Container = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
`;

export default function SuperCenter() {
    return(
        <Container>
            <Card/>
        </Container>
    );
}
