import styled from "styled-components";
import AddList from "./components/AddList";
import { BoardProvider } from "./context/BoardContext";
import ListView from "./views/ListView";

const Container = styled.div`
  padding: 2rem;
`;

const App = () => {
  return (
    <Container>
      <BoardProvider>
        <AddList />
        <ListView />
      </BoardProvider>
    </Container>
  );
};

export default App;
