import { createContext, useContext, useState } from "react";
import { BoardContextType, Task, Column } from "../types";

const defaultColumns: Column[] = [
  { title: "Todo", id: "0", tasks: [] },
  { title: "In Progress", id: "1", tasks: [] },
  { title: "Done", id: "2", tasks: [] },
];

const defaultValue: BoardContextType = {
  columns: [],
  addColumn: (column: Column) => {},
  updateColumn: (column: Column) => {},
  removeColumn: (columnId: string) => {},
  addTask: (task: Task, columnId: string) => {},
  updateTask: (task: Task, columnId: string) => {},
  removeTask: (taskId: string, columnId: string) => {},
};

const BoardContext = createContext<BoardContextType>(defaultValue);

type ProviderProps = {
  children?: React.ReactNode;
};

const BoardProvider = ({ children }: ProviderProps) => {
  const [columns, setColumns] = useState<Column[]>(defaultColumns);

  const addColumn = (column: Column) => {
    setColumns([...columns, column]);
  };

  const updateColumn = (column: Column) => {
    const newColumns = columns.map((_column) => {
      if (_column.id === column.id) {
        return column;
      }

      return _column;
    });

    setColumns(newColumns);
  };

  const removeColumn = (columnId: string) => {
    const newColumns = columns.filter((column) => column.id !== columnId);

    setColumns(newColumns);
  };

  const addTask = (task: Task, columnId: string) => {
    const newColumns = columns.map((column) => {
      if (column.id === columnId) {
        const newColumn = column;
        newColumn.tasks = [...newColumn.tasks, task];
        return newColumn;
      }

      return column;
    });

    setColumns(newColumns);
  };

  const updateTask = (task: Task, columnId: string) => {
    const newColumns = columns.map((column) => {
      if (column.id === columnId) {
        const newColumn = column;

        newColumn.tasks = column.tasks.map((_task) => {
          if (_task.id === task.id) {
            return task;
          }
          return _task;
        });

        return newColumn;
      }

      return column;
    });

    setColumns(newColumns);
  };

  const removeTask = (taskId: string, columnId: string) => {
    const newColumns = columns.map((column) => {
      if (column.id === columnId) {
        const newColumn = column;
        newColumn.tasks = column.tasks.filter((task) => task.id !== taskId);

        return newColumn;
      }

      return column;
    });

    setColumns(newColumns);
  };

  return (
    <BoardContext.Provider
      value={{
        columns,
        addColumn,
        updateColumn,
        removeColumn,
        addTask,
        updateTask,
        removeTask,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

const useBoardContext = () => {
  return useContext(BoardContext);
};

export { BoardContext, BoardProvider, useBoardContext };
