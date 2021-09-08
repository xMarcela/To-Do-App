import React from "react";
import styled from "styled-components";

const StyledToDoList = styled.ul`
  width: 200px;
  position: relative;
  padding: 50px;
  margin-top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f5f5f5;
`;

const StyledToDoListElement = styled.li`
  font-size: 16px;
  padding: 12px 10px;
  text-align: center;
  color: #454;
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
  border-bottom: 2px solid #9fb3b1;
`;

function ToDoListElement({ element = "" }) {
    return <StyledToDoListElement>{element}</StyledToDoListElement>
}

function ToDoList({ elements = [] }) {
    return (
        <StyledToDoList>
            {
                elements.map((element, i) => <ToDoListElement element={element} key={i} />)
            }
        </StyledToDoList>
    )
}

export default ToDoList