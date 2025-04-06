import {GlobalStyles} from "./globalStyles/GlobalStyles.tsx";
import {Cards} from "./layout/card/Card.tsx";
import styled from "styled-components";

function App() {

    return (
        <Wrapper>
            <Cards/>
            <GlobalStyles/>
        </Wrapper>
    )
}

export default App

const Wrapper = styled.div`
    width: 100vw;
`