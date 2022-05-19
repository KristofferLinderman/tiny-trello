import { useState } from "react";
import styled from "styled-components";
import { Item } from "../types";
import { v4 as uuidv4 } from "uuid";
import TextInput from "./TextInput";
import Modal from "./Modal";

type AddItemProps = {
  onItemAdd: (item: Item) => void;
};

const Container = styled.div`
  display: flex;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
`;

const AddItem = ({ onItemAdd }: AddItemProps) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //Todo add validation 😅
  const addTask = () => {
    const newItem: Item = {
      title,
      description,
      date: new Date(),
      id: uuidv4(),
    };

    onItemAdd(newItem);
    reset();
  };

  const reset = () => {
    setTitle("");
    setDescription("");
    setShowModal(false);
  };

  return (
    <Container>
      <button onClick={() => setShowModal(true)}>+ Add Item</button>
      <Modal
        isOpen={showModal}
        submitLabel={"Add task"}
        onCancel={() => reset()}
        onSubmit={() => addTask()}
        title={"Add Task"}
      >
        <TextInput
          label="Task title"
          onChange={(value) => setTitle(value)}
          value={title}
        />
        <TextInput
          label="Task description"
          onChange={(value) => setDescription(value)}
          value={description}
        />
      </Modal>
    </Container>
  );
};

export default AddItem;
