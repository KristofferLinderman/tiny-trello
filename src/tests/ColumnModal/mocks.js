export const mockOnCanel = jest.fn();
export const mockonSubmit = jest.fn();

export const mockedTask1 = {
  title: "mocked task 1",
  description: "mocked task 1",
  date: new Date(),
  id: "mocked task 1",
};

export const mockedTask2 = {
  title: "mocked task 2",
  description: "mocked task 2",
  date: new Date(),
  id: "mocked task 2",
};

export const mockedColumn = {
  title: "Mocked col",
  tasks: [mockedTask1, mockedTask2],
  id: "0",
};
