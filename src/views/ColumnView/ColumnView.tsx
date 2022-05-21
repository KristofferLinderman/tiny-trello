import { ColumnContainer } from "../../components/ColumnContainer";
import { useBoardContext } from "../../context/BoardContext";
import { Container } from "./ColumnView.style";

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

export { ColumnView };
