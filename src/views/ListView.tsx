import styled from "styled-components";
import { ItemList } from "../components/ItemList";
import { useBoardContext } from "../context/context";
import { List } from "../types";
// import { useBoardContext } from "../context/BoardContext";

const ListContainer = styled.div`
  display: flex;
  width: 100vw;
  + div {
    margin-right: 2rem;
  }
`;

const ListView = () => {
  const { state } = useBoardContext();
  console.log("🚀 ~ file: ListView.tsx ~ line 17 ~ ListView ~ state", state);

  const a = Object.values(state);
  console.log("🚀 ~ file: ListView.tsx ~ line 20 ~ ListView ~ a", a);

  const lists: List[] = a;

  return (
    <ListContainer>
      {lists.map((list) => {
        return <ItemList key={list.id} list={list} />;
      })}
    </ListContainer>
  );
};

export default ListView;
