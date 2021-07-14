import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

function App() {
    return (
        <Wrapper>
            <Title>It's gonna be awesome!</Title>
        </Wrapper>
    );
}

export default App;
