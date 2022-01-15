import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo, deleteTodo } from "../redux/modules/todos";

// Load Image
import Box from "../images/box.svg";

// Load MUI Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = ({ todos, title }) => {
  const dispatch = useDispatch();

  const changeComplete = (title, id) => {
    dispatch(updateTodo({ title, id }));
  };

  const deleteItem = (title, id) => {
    dispatch(deleteTodo({ title, id }));
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) return;

      const id = uuidv4();
      const obj = {
        title,
        todos: { todo: e.target.value, complete: false, id },
      };
      dispatch(addTodo(obj));

      e.target.value = "";
    }
  };

  return (
    <Section>
      <TodoUl>
        {todos.map((todo) => {
          return (
            <TodoLi key={todo.id}>
              <Checkbox
                onChange={() => {
                  changeComplete(title, todo.id);
                }}
                checked={todo.complete}
              />
              <b
                style={{
                  textDecoration: todo.complete ? "line-through" : "none",
                }}>
                {todo.todo}
              </b>
              <Btn edit>
                <EditIcon fontSize='small' />
              </Btn>
              <Btn
                onClick={() => {
                  deleteItem(title, todo.id);
                }}>
                <DeleteIcon fontSize='small' />
              </Btn>
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
  align-items: center;

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

const Btn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: ${(props) => (props.edit ? 0 : "-0.4rem")};

  &:hover {
    background: #f4f4f4;
  }
`;
