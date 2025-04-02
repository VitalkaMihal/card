import {GlobalStyles} from "./globalStyles/GlobalStyles.tsx";
import {Card} from "./layout/card/Card.tsx";
import styled from "styled-components";

function App() {

    return (
        <Wrapper>
            <Card/>
            <GlobalStyles/>
        </Wrapper>
    )
}

export default App

const Wrapper = styled.div`
    width: 100vw;
`