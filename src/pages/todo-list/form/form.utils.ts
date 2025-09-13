import {useAppDispatch} from "store/store.ts";
import {type ChangeEvent, type FormEvent, useState} from "react";
import {add} from "features/tasks/tasksSlice.ts";

export const useForm = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    dispatch(add(value.trim()));

    setValue('');
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  return {
    value,
    handleChangeValue,
    handleSubmit
  }
}