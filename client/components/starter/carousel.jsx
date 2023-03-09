import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import CodeRender from "./coderender";
import { setCurrSlide, editCurrentSlide, sendSlides, addSlide } from "../project/projectSlice.js";

const TextArea = styled.textarea`
  background-color: rgb(23, 24, 31);
  color: rgb(156, 169, 189);
  font-size: 0.8rem;
  border-radius: 4px;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  gap: 1rem;
`;

const Button = styled.button``;

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

  console.log("start", slides[currSlide]);
  return (
    <div className={className}>
      <Controls>
        <div onClick={handleLeft}>{"<--"}</div>
        <div onClick={handleSave}>{"Save"}</div>
        <div onClick={handleAddSlide}>{"Add"}</div>
        <div onClick={handleRight}>{"-->"}</div>
      </Controls>
      <CodeRender />
      <TextArea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={(e) => handleChange(e.target.value)}
        value={slides[currSlide]}
      ></TextArea>
    </div>
  );
};

const StyledCarousel = styled(Carousel)`
  display: flex;
  flex-direction: column;
`;

export default StyledCarousel;
