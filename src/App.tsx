import "./App.css";
import { ItemList } from "./components/ItemList";
import styled from "styled-components";
import { useState } from "react";
import { List } from "./components/types";

const Container = styled.div`
  padding: 2rem;
`;

const ListContainer = styled.div`
  display: flex;
  width: 100vw;
  div {
    margin-right: 2rem;
  }
`;

const App = () => {
  const [lists, setLists] = useState<List[]>([]);

  const addList = () => {
    const listTitle = prompt("Please enter list title");

    const newList: List = {
      title: listTitle || `List #${lists.length + 1}`,
      id: Math.random() * Math.random() * Math.random() * Math.random() * 100,
      items: [],
    };
    setLists([...lists, newList]);
  };

  return (
    <Container>
      <button onClick={addList}>Add list</button>
      <ListContainer>
        {lists.map((list) => {
          return <ItemList list={list} />;
        })}
      </ListContainer>
    </Container>
  );
};

export default App;
