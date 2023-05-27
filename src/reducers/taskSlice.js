import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      
      state.push(action.payload);
    },                                                                                                                                                                                                                                                                                                       
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
        const { id, name, age } = action.payload;
        const taskToUpdate = state.find((task) => task.id === id);
        if (taskToUpdate) {
          taskToUpdate.name = name;
          taskToUpdate.age = age;
        }
      }
  }
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;