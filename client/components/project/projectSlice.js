import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  currSlide: 0,
  slides: [],
  title: "",
  user: "",
  search: "",
};

// https://redux.js.org/tutorials/essentials/part-5-async-logic#checking-thunk-results-in-components

export const fetchProject = createAsyncThunk("project", async (project) => {
  const res = await fetch(`/api?title=${project}`);
  const json = await res.json();
  return json[0];
});

export const sendSlides = createAsyncThunk("slides", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const { title, slides } = state.projects;
  const res = await fetch(`/api`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, slides }),
  });
});

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setProject: (state, action) => {
      state = {
        ...state,
        title: action.payload.title,
        slides: action.payload.slides,
        currSlide: 0,
      };
    },
    setCurrSlide: (state, action) => {
      const nextSlide = state.currSlide + action.payload;
      if (nextSlide < 0) state.currSlide = state.slides.length - 1;
      else if (nextSlide === state.slides.length) {
        state.currSlide = 0;
      } else state.currSlide = state.currSlide + action.payload;
    },
    editCurrentSlide: (state, action) => {
      state.slides[state.currSlide] = action.payload;
    },
    addSlide: (state, action) => {
      state.slides.push(state.slides[state.slides.length - 1]);
      state.currSlide = state.slides.length - 1;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProject.fulfilled, (state, action) => {
      state.status = "success";
      state.title = action.payload.title;
      state.slides = action.payload.slides;
    });
  },
});

export const { setSearch, setProject, setCurrSlide, editCurrentSlide, addSlide } =
  projectSlice.actions;
export default projectSlice.reducer;
