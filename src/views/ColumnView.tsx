import styled from "styled-components";
import { ColumnContainer } from "../components/ColumnContainer";
import { useBoardContext } from "../context/BoardContext";

const Container = styled.div`
  display: flex;
  width: 100vw;
  + div {
    margin-right: 2rem;
  }
`;

const ColumnView = () => {
  const { columns } = useBoardContext();

  return (
    <Container>
      {columns.map((column) => {
        return <ColumnContainer key={column.id} column={column} />;
      })}
    </Container>
  );
};

export default ColumnView;
