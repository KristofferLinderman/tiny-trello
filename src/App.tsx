import styled from "styled-components";
import { BoardProvider } from "./context/BoardContext";
import { ColumnView } from "./views/ColumnView";

const Container = styled.div`
  padding: 2rem;
  box-sizing: border-box;
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <BoardProvider>
        <ColumnView />
      </BoardProvider>
    </Container>
  );
};

export default App;
