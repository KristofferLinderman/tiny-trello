import { useState } from "react";
import { AddColumn } from "../../components/AddColumn";
import { ColumnContainer } from "../../components/ColumnContainer";
import { useBoardContext } from "../../context/BoardContext";
import { Column } from "../../types";
import { ComlumnWrapper, Container } from "./ColumnView.style";

const ColumnView = () => {
  const [selectedColumn, setSelectedColumn] = useState<Column | null>(null);
  const { columns } = useBoardContext();

  const onUpdateColumn = (column: Column) => {
    setSelectedColumn(column);
  };

  return (
    <Container>
      <AddColumn
        columnToEdit={selectedColumn}
        setColumnToEdit={setSelectedColumn}
      />
      <ComlumnWrapper>
        {columns.map((column) => {
          return (
            <ColumnContainer
              onUpdateColumn={(column) => onUpdateColumn(column)}
              key={column.id}
              column={column}
            />
          );
        })}
      </ComlumnWrapper>
    </Container>
  );
};

export { ColumnView };
