import {useAppDispatch} from "store/store.ts";
import {remove} from "features/tasks/tasksSlice.ts";

export const useList = () => {
  const dispatch = useAppDispatch();

  const handleRemove = (id: string) => {
    dispatch(remove(id))
  }

  return {
    handleRemove
  }
}