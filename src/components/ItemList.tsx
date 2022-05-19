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
  const { addItem, removeItem, updateItem, removeList, updateList } =
    useBoardContext();
  const { title, id, items } = list;

  const onRemoveList = () => {
    removeList(list.id);
  };

  const onUpdateList = () => {
    const newList = list;
    newList.title = "Panda list";
    updateList(newList);
  };

  const onItemAdd = (item: Item) => {
    console.log("🐼 - Adding ", item);
    addItem(item, id);
  };

  const onItemRemove = (itemId: string) => {
    console.log("🐼 - onItemRemove ", itemId);
    removeItem(itemId, id);
  };

  const onItemUpdate = (item: Item) => {
    console.log("🐼 - onItemRemove ", item);
    updateItem(item, id);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <button onClick={onRemoveList}>🗑</button>
      <button onClick={onUpdateList}>✏️</button>
      <ItemContainer>
        {items.map((item) => {
          return (
            <ItemCard
              key={item.id}
              item={item}
              onRemove={onItemRemove}
              onUpdate={onItemUpdate}
            />
          );
        })}
      </ItemContainer>
      <AddItem onItemAdd={onItemAdd} />
    </Container>
  );
};

export { ItemList };
