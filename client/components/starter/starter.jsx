import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, fetchProject, setProject, createProject } from "../project/projectSlice.js";
import "highlight.js/styles/atom-one-dark.css";

import Carousel from "./carousel";
import SlidePanel from "./slidePanel.jsx";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LabelName = styled.p`
  color: rgb(179, 177, 177)
  margin: 0;
`;

const Input = styled.input`
  background-color: rgb(57, 60, 64);
  color: rgb(199, 198, 201);
`;

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
        <Label>
          <LabelName>Choose project</LabelName>
          <Input type="text" onChange={(e) => handleChange(e.target.value)} />
        </Label>
      </form>
    </div>
  );
};

const CreateProjectForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleChange = (input) => {
    setText(input);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await fetch("/api", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ title: text, slides: [] }),
    // });
    // const json = await res.json();
    // const { slides, title } = json;
    dispatch(createProject(text));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Label>
          <LabelName>Create new project</LabelName>
          <Input
            name="project-form"
            type="text"
            onChange={(e) => handleChange(e.target.value)}
            value={text}
          />
        </Label>
      </form>
    </div>
  );
};

function Starter({ className }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.projects);

  useEffect(() => {
    if (state.slides.length === 0) dispatch(fetchProject("walkthrough"));
  }, []);

  return (
    <div className={className}>
      <h2>{state.status === "idle" ? "Loading..." : <em>{state.title}</em>}</h2>
      <CreateProjectForm />
      <GetProjectForm />
      <br />
      <SlidePanel />
      <br />
      <Carousel />
    </div>
  );
}

const StyledStarter = styled(Starter)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default StyledStarter;
