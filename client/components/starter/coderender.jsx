import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import hljs from "highlight.js";
import styled from "styled-components";

const Code = styled.code`
  border-radius: 4px;
  font-size: 1.4rem;
`;

const CodeRender = ({ className }) => {
  const { slides, currSlide } = useSelector((state) => state.projects);

  useEffect(() => {
    hljs.highlightAll();
  }, [slides, currSlide]);

  return (
    <div className={className}>
      <pre>
        <Code className="language-javascript">{slides[currSlide]}</Code>
      </pre>
    </div>
  );
};

const StyledCodeRenderer = styled(CodeRender)`
  width: 90%;
`;

export default StyledCodeRenderer;
