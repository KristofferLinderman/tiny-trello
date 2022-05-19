import styled from "styled-components";
import { ItemList } from "../components/ItemList";
import { useBoardContext } from "../context/BoardContext";

const ListContainer = styled.div`
  display: flex;
  width: 100vw;
  + div {
    margin-right: 2rem;
  }
`;

const ListView = () => {
  const { lists } = useBoardContext();

  return (
    <ListContainer>
      {lists.map((list) => {
        return <ItemList key={list.id} list={list} />;
      })}
    </ListContainer>
  );
};

export default ListView;
