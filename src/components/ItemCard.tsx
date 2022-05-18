import styled from "styled-components";
import { Item } from "./types";

const Container = styled.div`
  width: 100%;
  background-color: #aaa;
`;

type ItemCardProps = {
  item: Item;
};

const ItemCard = ({ item }: ItemCardProps) => {
  return <Container>{item.title}</Container>;
};

export { ItemCard };
