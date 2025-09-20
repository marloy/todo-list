import {render, type RenderOptions} from '@testing-library/react';
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import type {PropsWithChildren, ReactElement} from "react";
import tasks from 'features/tasks/tasksSlice.ts'
import type {RootState} from "store/store.ts";

export const renderWithRedux = (
  ui: ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: { tasks },
      preloadedState
    }),
    ...renderOptions
  }: {
    preloadedState?: RootState,
    store?: ReturnType<typeof configureStore>
  } & RenderOptions = {}
) => {

  function Wrapper({ children }: PropsWithChildren) {
    return <Provider store={store}>{children}</Provider>;
  }

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions })
  }
};