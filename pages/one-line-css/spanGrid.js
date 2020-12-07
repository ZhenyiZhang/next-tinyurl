import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(12, fr);
    width: 100vw;
    height: 100vh;
`;

const Span12 = styled.div`
    background: #E87574;
    grid-column: 1 / 13;
`;

const Span6 = styled.div`
    background: #0070f3;
    grid-column: 3 / 10;
`;

const Span4 = styled.div`
    background: black;
    grid-column: 1 / 5;
`;

export default function SpanGrid() {
    return(
        <Container>
            <Span12/>
            <Span6/>
            <Span4/>
        </Container>
    );
}