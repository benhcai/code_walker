import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, fetchProject, setProject } from "../project/projectSlice.js";
import "highlight.js/styles/atom-one-dark.css";

import Carousel from "./carousel";
import SlidePanel from "./slidePanel.jsx";

const CreateProjectForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleChange = (input) => {
    setText(input);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // fetch
    // on success
    // set project state
    const res = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: text, slides: [] }),
    });
    console.log(res);
    const json = await res.json();
    const { slides, title } = json;
    dispatch(setProject({ slides, title, currSlide: 0 }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Create new project
          <input
            name="project-form"
            type="text"
            onChange={(e) => handleChange(e.target.value)}
            value={text}
          />
        </label>
      </form>
    </div>
  );
};

const GetProjectForm = (name) => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.projects);

  const handleChange = (search) => {
    dispatch(setSearch(search));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchProject(search));
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Choose project
          <input type="text" onChange={(e) => handleChange(e.target.value)} />
        </label>
      </form>
    </div>
  );
};

function Starter() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.projects);

  useEffect(() => {
    if (state.slides.length === 0) dispatch(fetchProject("walkthrough"));
  }, []);

  return (
    <div>
      <h2>{state.status === "idle" ? "Loading..." : state.title}</h2>
      <CreateProjectForm />
      <GetProjectForm />
      <br />
      <SlidePanel />
      <br />
      <Carousel />
    </div>
  );
}

export default Starter;
