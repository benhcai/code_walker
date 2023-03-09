import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./components/project/projectSlice";

const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});

export default store;
