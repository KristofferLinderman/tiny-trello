import { ItemCard } from "./ItemCard";
import styled from "styled-components";
import ItemModal from "./ItemModal";
import { Item, List } from "../types";
import { useBoardContext } from "../context/BoardContext";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
  > div {
    margin-bottom: 1rem;
  }
`;

type ItemListProps = {
  list: List;
};

const ItemList = ({ list }: ItemListProps) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [showItemModal, setShowItemModal] = useState(false);
  const { addItem, removeItem, updateItem, removeList, updateList } =
    useBoardContext();

  const { title, id, items } = list;
  const isUpdatingItem = selectedItem !== null;

  const onRemoveList = () => {
    removeList(list.id);
  };

  const onUpdateList = () => {
    const newList = list;
    newList.title = "Panda list";
    updateList(newList);
  };

  const onItemRemove = (itemId: string) => {
    console.log("🐼 - onItemRemove ", itemId);
    removeItem(itemId, id);
  };

  const onItemUpdate = (item: Item) => {
    setShowItemModal(true);
    setSelectedItem(item);
  };

  const handleItemSubmit = (item: Item) => {
    setShowItemModal(false);
    setSelectedItem(null);

    if (isUpdatingItem) {
      updateItem(item, id);
    } else {
      addItem(item, id);
    }
  };

  const handleOnCancel = () => {
    setShowItemModal(false);
    setSelectedItem(null);
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
      <button onClick={() => setShowItemModal(true)}>+ Add Item</button>
      <ItemModal
        item={selectedItem}
        isOpen={showItemModal}
        onCancel={handleOnCancel}
        onSubmit={handleItemSubmit}
      />
    </Container>
  );
};

export { ItemList };
