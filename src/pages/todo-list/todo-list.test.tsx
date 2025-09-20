import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {TodoList} from "./todo-list.tsx";
import {renderWithRedux} from "helpers/render-with-redux.tsx";
import {expect} from "vitest";

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

  it('Удаляет задачу из списка', async () => {
    const preloadedState = {
      tasks: {
        ids: ['1'],
        entities: {
          '1': {
            id: '1',
            name: 'task 1',
            completed: false,
            createdAt: new Date().toISOString()
          }
        }
      }
    }

    renderWithRedux(<TodoList />, { preloadedState });

    const user = userEvent.setup();
    const button = screen.getByTestId('remove-button');

    expect(screen.queryByText('task 1')).toBeInTheDocument();

    await user.click(button);

    expect(screen.queryByText('task 1')).not.toBeInTheDocument();
  })
})