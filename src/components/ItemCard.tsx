import styled from "styled-components";
import { Item } from "../types";

const Container = styled.div`
  width: 100%;
  cursor: pointer;
  background-color: #aaa;
`;

type ItemCardProps = {
  item: Item;
  onRemove: (itemId: string) => void;
  onUpdate: (item: Item) => void;
};

const ItemCard = ({ item, onRemove, onUpdate }: ItemCardProps) => {
  const handleOnClick = () => {
    console.log("🐼 - Click");
    // onRemove(item.id);
    const newItem = item;
    newItem.title = "Panda";
    onUpdate(newItem);
  };

  return <Container onClick={handleOnClick}>{item.title}</Container>;
};

export { ItemCard };
