import styled from "styled-components";
import { Item } from "../types";

const Container = styled.div`
  width: 100%;
  cursor: pointer;
  background-color: #aaa;
`;

type ItemCardProps = {
  item: Item;
  onRemove: (itemId: number) => void;
};

const ItemCard = ({ item, onRemove }: ItemCardProps) => {
  const handleOnClick = () => {
    console.log("🐼 - Click");
    onRemove(item.id);
  };

  return <Container onClick={handleOnClick}>{item.title}</Container>;
};

export { ItemCard };
