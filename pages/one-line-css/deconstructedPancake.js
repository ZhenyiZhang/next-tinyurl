import styled from 'styled-components';

const Card = styled.div`
    background: #E87574;
    //flex-grow flex-shrink flex-basis|auto|initial|inherit;
    //@note: not understand the first and second parameters 
    flex: 1 0 150px;
    margin: 5px;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    justify-content: center;
`;

export default function DeconstructedPancake() {
    return(
        <Container>
            <Card/>
            <Card/>
            <Card/>
        </Container>
    );
}
