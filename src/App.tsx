import styled from "styled-components";
import AddColumn from "./components/AddColumn/AddColumn";
import { BoardProvider } from "./context/BoardContext";
import ColumnView from "./views/ColumnView";

const Container = styled.div`
  padding: 2rem;
`;

const App = () => {
  return (
    <Container>
      <BoardProvider>
        <AddColumn />
        <ColumnView />
      </BoardProvider>
    </Container>
  );
};

export default App;
