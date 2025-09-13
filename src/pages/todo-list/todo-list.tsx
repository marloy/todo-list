import {Form} from "./form/form.tsx";
import {List} from "./list/list.tsx";
import style from './todo-list.module.scss';
import {useAppSelector} from "store/store.ts";
import {selectAllTasks} from "features/tasks/tasksSlice.ts";

export const TodoList = () => {
  const items = useAppSelector(selectAllTasks);

  return (
    <main className={style.app}>
      <section className={style.content}>
        <h1>To-Do List</h1>
        <Form/>
        <List items={items}/>
      </section>
    </main>
  )
}