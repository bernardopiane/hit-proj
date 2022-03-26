import Page from "./screens/Page";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

const Styles = styled.div`
  font-family: "Montserrat", sans-serif;
`;

function App() {
  return (
    <BrowserRouter>
      <Styles>
        <Page />
      </Styles>
    </BrowserRouter>
  );
}

export default App;
