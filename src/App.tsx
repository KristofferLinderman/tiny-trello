import styled from "styled-components";
import AddList from "./components/AddList";
import { BoardProvider } from "./context/context";
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
