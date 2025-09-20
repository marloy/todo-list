import type {TaskItem} from "entities/task.ts";
import type {FC} from "react";

import style from './list.module.scss';
import {useList} from "./list.utils.ts";

type ListProps = {
  items?: TaskItem[];
}

export const List: FC<ListProps> = ({ items }) => {
  const { handleRemove, handleCompleted } = useList();

  if (!items || !items.length) {
    return null
  }

  return (
    <ul className={style.list}>
      {
        items.map((task) => (
          <li className={style.listItem} key={task.id}>
            <label className={style.label}>
              <input
                data-id={task.id}
                type="checkbox"
                className={style.checkbox}
                checked={task.completed}
                onChange={(e) => handleCompleted(task.id, e.target.checked)}
              />
              <span
                className={task.completed ? style.checked : undefined}
              >
                {task.name}
              </span>
            </label>
            <button
              data-testId='remove-button'
              type='button'
              onClick={() => {
                handleRemove(task.id);
              }}
            >
              X
            </button>
          </li>
        ))
      }
    </ul>
  )
}