import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import type {ReactElement} from "react";
import tasks from 'features/tasks/tasksSlice.ts'

export const renderWithRedux = (ui: ReactElement, preloadedState = {}) => {
  const store = configureStore({
    reducer: { tasks },
    preloadedState,
  });

  return render(<Provider store={store}>{ui}</Provider>);
};