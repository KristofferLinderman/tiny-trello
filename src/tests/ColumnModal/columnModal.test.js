import { fireEvent, render, screen } from "@testing-library/react";
import { ColumnModal } from "../../components/ColumnModal";
import { mockedColumn, mockOnCanel, mockonSubmit } from "./mocks";

const renderColumnModal = (column = mockedColumn) => {
  render(
    <ColumnModal
      column={column}
      isOpen={true}
      onCancel={mockOnCanel}
      onSubmit={mockonSubmit}
    />
  );
};

const newColumnTitle = "Test Title";

describe("ColumnModal", () => {
  it("shows empty input with no passed column", () => {
    renderColumnModal(null);
    const inputField = screen.getByTestId("Column title input");

    expect(inputField.getAttribute("value")).toEqual("");
  });

  it("shows column title when passed column", () => {
    renderColumnModal();
    const inputField = screen.getByTestId("Column title input");

    expect(inputField.getAttribute("value")).toEqual("Mocked col");
  });

  it("can add new column", () => {
    renderColumnModal(null);

    const inputField = screen.getByTestId("Column title input");
    const submitBtn = screen.getByTestId("modal-submit-btn");

    fireEvent.change(inputField, { target: { value: newColumnTitle } });
    fireEvent.click(submitBtn);

    const expectedObject = expect.objectContaining({ title: newColumnTitle });
    expect(mockonSubmit).toBeCalledWith(expectedObject);
  });

  it("can NOT add new column with empty title", () => {
    renderColumnModal(null);
    const submitBtn = screen.getByTestId("modal-submit-btn");
    const windowAlert = jest
      .spyOn(window, "alert")
      .mockImplementation(() => {});

    fireEvent.click(submitBtn);

    expect(mockonSubmit).not.toBeCalled();
    expect(windowAlert).toBeCalledWith("Columns require a name");
  });

  it("can edit existing column", () => {
    renderColumnModal();

    const inputField = screen.getByTestId("Column title input");
    const submitBtn = screen.getByTestId("modal-submit-btn");

    fireEvent.change(inputField, { target: { value: newColumnTitle } });
    fireEvent.click(submitBtn);

    const expectedObject = expect.objectContaining({ title: newColumnTitle });
    expect(mockonSubmit).toBeCalledWith(expectedObject);
  });
});
