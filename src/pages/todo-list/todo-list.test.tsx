import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {TodoList} from "./todo-list.tsx";
import {renderWithRedux} from "helpers/render-with-redux.tsx";

describe('todo-list', () => {
  it('Добавляет задачу в список, когда пользователь нажимает Добавить', async () => {
    renderWithRedux(<TodoList />)

    const button = screen.getByText('Добавить');
    const input = screen.getByPlaceholderText('Новая задача');
    const user = userEvent.setup();

    expect(screen.queryByText('task 1')).not.toBeInTheDocument();

    await user.type(input, 'task 1');
    await user.click(button);

    expect(await screen.findByText('task 1')).toBeInTheDocument();
    expect(input).toHaveValue('');
  })
})