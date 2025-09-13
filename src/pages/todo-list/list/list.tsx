import type {TaskItem} from "entities/task.ts";
import type {FC} from "react";

import style from './list.module.scss';
import {useList} from "./list.utils.ts";

type ListProps = {
  items?: TaskItem[];
}

export const List: FC<ListProps> = ({ items }) => {
  const { handleRemove } = useList();

  if (!items || !items.length) {
    return null
  }

  return (
    <ul className={style.list}>
      {
        items.map((task) => (
          <li key={task.id} className={style.item}>
            <span>{task.name}</span>
            <button
              type='button'
              onClick={() => {
                handleRemove(task.id);
              }}
            >
              Удалить
            </button>
          </li>
        ))
      }
    </ul>
  )
}