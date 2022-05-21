import { useEffect, useState } from "react";
import styled from "styled-components";
import { Item } from "../types";
import { v4 as uuidv4 } from "uuid";
import TextInput from "./TextInput";
import Modal from "./Modal";

type ItemModalProps = {
  item: Item | null;
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: (item: Item) => void;
};

const Container = styled.div`
  display: flex;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
`;

const ItemModal = ({ item, isOpen, onCancel, onSubmit }: ItemModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const reset = () => {
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setDescription(item.description);
    }
  }, [item]);

  //Todo add validation 😅
  const handleSubmit = () => {
    const newItem: Item = {
      title,
      description,
      date: new Date(),
      id: item?.id || uuidv4(),
    };

    reset();
    onSubmit(newItem);
  };

  const handleCancel = () => {
    reset();
    onCancel();
  };

  return (
    <Container>
      <Modal
        isOpen={isOpen}
        submitLabel={"Add task"}
        onCancel={() => handleCancel()}
        onSubmit={() => handleSubmit()}
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

export default ItemModal;
