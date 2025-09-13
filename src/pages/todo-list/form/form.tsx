import style from './form.module.scss';
import {useForm} from "./form.utils.ts";

export const Form = () => {
  const { handleSubmit, value, handleChangeValue } = useForm();

  return (
    <form
      className={style.root}
      onSubmit={handleSubmit}
    >
      <input
        className={style.input}
        type="text"
        name="task"
        placeholder="Новая задача"
        value={value}
        onChange={handleChangeValue}

      />
      <button type='submit'>Добавить</button>
    </form>
  )
}