import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './src/reducers/taskSlice'

const store = configureStore({
  reducer: {
    tasks: taskReducer
  }
});

export default store;