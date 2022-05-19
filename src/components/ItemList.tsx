import { ItemCard } from "./ItemCard";
import styled from "styled-components";
import AddItem from "./AddItem";
import { Item, List } from "../types";
import { useBoardContext } from "../context/BoardContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  border-radius: 6px;
  width: 20vw;
  padding: 1rem;
  height: 80vh;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin-bottom: 1rem;
  }
`;

type ItemListProps = {
  list: List;
};

const ItemList = ({ list }: ItemListProps) => {
  const { addItem, removeItem } = useBoardContext();
  const { title, id, items } = list;

  const onItemAdd = (item: Item) => {
    console.log("🐼 - Adding ", item);
    addItem(item, id);
  };

  const onItemRemove = (itemId: number) => {
    console.log("🐼 - onItemRemove ", itemId);
    removeItem(itemId, id);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <ItemContainer>
        {items.map((item) => {
          return <ItemCard key={item.id} item={item} onRemove={onItemRemove} />;
        })}
      </ItemContainer>
      <AddItem onItemAdd={onItemAdd} />
    </Container>
  );
};

export { ItemList };
