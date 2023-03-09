import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const SlideBlock = styled.div`
  background-color: ${(props) => (props.active ? "blue" : "")};
  padding: 0 1rem;
  border-radius: 4px;
`;

const SlidePanel = ({ className }) => {
  const { slides, currSlide } = useSelector((state) => state.projects);
  return (
    <div className={className}>
      {slides.map((block, id) => (
        <SlideBlock key={id} active={currSlide === id}>{`${id}`}</SlideBlock>
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
  height: 2rem;
  align-items: center;
  font-size: 1rem;
  border-radius: 8px;
`;

export default StyledSlidePanel;
