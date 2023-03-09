import "./style.css";
import React from "react";
import Starter from "./components/starter/starter.jsx";
import styled from "styled-components";

function App({ className }) {
  return (
    <div className={className}>
      <h1>Code Walker</h1>
      <Starter></Starter>
    </div>
  );
}

const StyledApp = styled(App)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StyledApp;
