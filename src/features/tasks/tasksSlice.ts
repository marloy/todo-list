import {createEntityAdapter, createSlice, nanoid} from '@reduxjs/toolkit'
import type {TaskItem} from "entities/task.ts";
import type {RootState} from "store/store.ts";

const tasksAdapter = createEntityAdapter<TaskItem>({
  sortComparer: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
});

export const counterSlice = createSlice({
  name: 'tasks',
  initialState: tasksAdapter.getInitialState(),
  reducers: {
    add: {
      reducer: tasksAdapter.addOne,
      prepare: (name: string) => {
        const id = nanoid();
        return {
          payload: { id, name, completed: false, createdAt: new Date().toISOString() }
        };
      },
    },
    remove: tasksAdapter.removeOne,
  },
})

export const { add, remove } = counterSlice.actions

const {
  selectAll,
} = tasksAdapter.getSelectors((state: RootState) => state.tasks);

export const selectAllTasks = selectAll;

export default counterSlice.reducer