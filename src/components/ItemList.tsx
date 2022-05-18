import { ItemCard } from "./ItemCard";
import styled from "styled-components";
import AddItem from "./AddItem/AddItem";
import { Item, List } from "./types";
import { useState } from "react";

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
  const { title } = list;
  const [items, setItems] = useState<Item[]>([]);
  console.log("🚀 ~ file: ItemList.tsx ~ line 22 ~ ItemList ~ items", items);

  const addItem = (item: Item) => {
    console.log("🐼 - Adding ", item);
    setItems([...items, item]);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <ItemContainer>
        {items.map((item) => {
          return <ItemCard key={item.id} item={item} />;
        })}
      </ItemContainer>
      <AddItem onItemAdd={addItem} />
    </Container>
  );
};

export { ItemList };
