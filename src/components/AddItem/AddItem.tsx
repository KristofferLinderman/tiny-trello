import { useState } from "react";
import styled from "styled-components";
import { Item } from "../../types";

const Container = styled.div`
  display: flex;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  width: 50vw;
  height: 50vh;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid #000;
  padding: 2rem;
`;

type AddItemProps = {
  onItemAdd: (item: Item) => void;
};

const AddItem = ({ onItemAdd }: AddItemProps) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    const newItem: Item = {
      title,
      description,
      date: new Date(),
      id: Math.random() * Math.random() * 100,
    };
    onItemAdd(newItem);
    setTitle("");
    setDescription("");
    setShowModal(false);
  };

  return (
    <Container>
      <button onClick={() => setShowModal(true)}>+ Add Item</button>
      {showModal && (
        <ModalContainer>
          <h1>Add item here:</h1>
          <label htmlFor="title">Task title</label>
          <input
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <label htmlFor="description">Task description</label>
          <input
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <button onClick={addTask}>Add task</button>
        </ModalContainer>
      )}
    </Container>
  );
};

export default AddItem;
