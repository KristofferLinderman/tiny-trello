export type Task = {
  title: string;
  description: string;
  date: Date;
  id: string;
};

export type Column = {
  title: string;
  tasks: Task[];
  id: string;
};

export type BoardContextType = {
  columns: Column[];

  addColumn: (column: Column) => void;
  updateColumn: (column: Column) => void;
  removeColumn: (columnId: string) => void;

  addTask: (task: Task, columnId: string) => void;
  updateTask: (task: Task, columnId: string) => void;
  removeTask: (taskId: string, columnId: string) => void;
};
