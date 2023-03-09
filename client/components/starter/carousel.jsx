import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaSave, FaPlus, FaArrowLeft, FaArrowRight, FaTrash } from "react-icons/fa";

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
  background-color: rgb(33, 123, 183);
  color: white;
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
        <Button onClick={handleLeft}>
          <FaArrowLeft />
        </Button>
        <Button onClick={handleSave}>
          <FaSave />
        </Button>
        <Button onClick={handleAddSlide}>
          <FaPlus />
        </Button>
        <Button onClick={handleDeleteSlide}>
          <FaTrash />
        </Button>
        <Button onClick={handleRight}>
          <FaArrowRight />
        </Button>
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
  width: 100%;
`;

export default StyledCarousel;
