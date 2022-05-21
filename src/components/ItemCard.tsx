import styled from "styled-components";
import { Item } from "../types";

const Container = styled.div`
  width: 100%;
  cursor: pointer;
  background-color: #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const Title = styled.h3``;

const ButtonContainer = styled.div`
  > button {
    margin-left: 0.5rem;
  }
`;

const TinyButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 5px;
  cursor: pointer;
`;

type ItemCardProps = {
  item: Item;
  onRemove: (itemId: string) => void;
  onUpdate: (item: Item) => void;
};

const ItemCard = ({ item, onRemove, onUpdate }: ItemCardProps) => {
  const handleEditClick = () => {
    console.log("🐼 - Clicked Edit");
    onUpdate(item);
  };

  const handleRemoveClick = () => {
    console.log("🐼 - Clicked");
    onRemove(item.id);
  };

  return (
    <Container>
      <Title>{item.title}</Title>
      <ButtonContainer>
        <TinyButton onClick={handleEditClick}>✏️</TinyButton>
        <TinyButton onClick={handleRemoveClick}>🗑</TinyButton>
      </ButtonContainer>
    </Container>
  );
};

export { ItemCard };
