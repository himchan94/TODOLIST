import React, { useState, useRef } from "react";
import styled from "styled-components";

import Box from "../images/box.svg";

const TodoList = () => {
  const [todoList, setTodoList] = useState([
    { todo: "인사하기", complete: true },
    { todo: "공부하기", complete: true },
    { todo: "낚시하기", complete: false },
  ]);

  const changeComplete = (index) => {
    const list = todoList.map((list, idx) => {
      if (idx === index) {
        return { ...list, complete: !list.complete };
      }
      return list;
    });

    setTodoList(list);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      const obj = { todo: e.target.value, complete: false };
      setTodoList([...todoList, obj]);
      e.target.value = "";
    }
  };

  return (
    <Section>
      <TodoUl>
        {todoList.map((list, idx) => {
          return (
            <TodoLi key={idx}>
              <Checkbox
                onChange={() => {
                  changeComplete(idx);
                }}
                checked={list.complete}
              />
              <b
                style={{
                  textDecoration: list.complete ? "line-through" : "none",
                }}>
                {list.todo}
              </b>
            </TodoLi>
          );
        })}
      </TodoUl>
      <InputContainer>
        <img src={Box} alt='Just A Box' />
        <InputBox
          placeholder='Write a task and press enter'
          onKeyPress={onKeyPress}
        />
      </InputContainer>
    </Section>
  );
};

export default TodoList;

const Section = styled.section`
  margin-top: 1.619em;
`;

const TodoUl = styled.ul``;

const TodoLi = styled.li`
  display: flex;
  margin-top: 0.998em;

  &:last-child {
    margin-bottom: 2.123em;
  }
`;

const Checkbox = styled.input.attrs({
  type: "checkbox",
})`
  margin-right: 0.544em;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const InputBox = styled.input`
  width: 100%;
  border: none;
  margin-left: 0.544em;
`;
