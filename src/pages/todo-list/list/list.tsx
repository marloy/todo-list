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
          <li
            key={task.id}
            className={style.item}
            role='checkbox'
            onClick={() => {handleCompleted(task.id, !task.completed)}}
          >
            <div className={style.content}>
              <input
                type="checkbox"
                name='item'
                className={style.checkbox}
                checked={task.completed}
              />
              <span
                className={task.completed ? style.checked : undefined}
              >
                {task.name}
              </span>
            </div>
            <button
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