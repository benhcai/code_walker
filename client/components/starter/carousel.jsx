import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import CodeRender from "./coderender";
import {
  setCurrSlide,
  editCurrentSlide,
  sendSlides,
  addSlide,
  deleteCurrentSlide,
} from "../project/projectSlice.js";

const TextArea = styled.textarea`
  background-color: rgb(57, 60, 64);
  color: rgb(156, 169, 189);
  font-size: 0.8rem;
  border-radius: 4px;
  padding: 8px;
  border: none;
  width: 80%;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  gap: 1rem;
`;

const Button = styled.div`
  background-color: blue;
  border-radius: 4px;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const Carousel = ({ className }) => {
  const dispatch = useDispatch();
  const { slides, currSlide } = useSelector((state) => state.projects);
  const handleChange = (text) => {
    dispatch(editCurrentSlide(text));
  };

  const handleLeft = () => {
    dispatch(setCurrSlide(-1));
  };

  const handleRight = () => {
    dispatch(setCurrSlide(1));
  };

  const handleSave = () => {
    dispatch(sendSlides());
  };

  const handleAddSlide = () => {
    dispatch(addSlide());
  };

  const handleDeleteSlide = () => {
    dispatch(deleteCurrentSlide());
  };

  console.log("start", slides[currSlide]);
  return (
    <div className={className}>
      <Controls>
        <Button onClick={handleLeft}>{"<--"}</Button>
        <Button onClick={handleSave}>{"Save"}</Button>
        <Button onClick={handleAddSlide}>{"Add"}</Button>
        <Button onClick={handleDeleteSlide}>{"Delete"}</Button>
        <Button onClick={handleRight}>{"-->"}</Button>
      </Controls>
      <CodeRender />
      <TextArea
        name=""
        id=""
        cols="30"
        rows="7"
        onChange={(e) => handleChange(e.target.value)}
        value={slides[currSlide]}
      ></TextArea>
    </div>
  );
};

const StyledCarousel = styled(Carousel)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StyledCarousel;
