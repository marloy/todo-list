import {useAppDispatch} from "store/store.ts";
import {remove, update} from "features/tasks/tasksSlice.ts";

export const useList = () => {
  const dispatch = useAppDispatch();

  const handleRemove = (id: string) => {
    dispatch(remove(id))
  }

  const handleCompleted = (id: string, completed: boolean) => {
    dispatch(update({
      id,
      changes: { completed }
    }))
  }

  return {
    handleRemove,
    handleCompleted
  }
}