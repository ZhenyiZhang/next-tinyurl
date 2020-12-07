import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-gap: 1rem;
    //auto fill would not allow items to exceed the 150px limit
    //@note: why limited by the min limit when it's auto fill
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    height: 100vh;
`;

const Card = styled.div`
    background: #E87574;
`;

export default function RAM() {
    return(
        <Container>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Container>
    );
}