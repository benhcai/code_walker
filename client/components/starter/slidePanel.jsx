import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { goToSlide } from "../project/projectSlice";

const SlideBlock = styled.div`
  background-color: ${(props) => (props.active ? "rgb(33,123,183)" : "")};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`;

const SlidePanel = ({ className }) => {
  const { slides, currSlide } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(goToSlide(id));
  };

  return (
    <div className={className}>
      {slides.map((block, id) => (
        <SlideBlock
          onClick={() => handleClick(id)}
          key={id}
          active={currSlide === id}
        >{`${id}`}</SlideBlock>
      ))}
    </div>
  );
};

const StyledSlidePanel = styled(SlidePanel)`
  display: flex;
  flex-direction: row;
  background-color: rgb(24, 25, 27);
  color: white;
  justify-content: space-around;
  min-height: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  align-items: center;
  font-size: 1rem;
  border-radius: 8px;
  width: 100%;
`;

export default StyledSlidePanel;
