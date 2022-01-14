import { useState } from "react";
import styled from "styled-components";
import TodoBigName from "../elements/TodoBigName";
import TodoList from "../elements/TodoList";

const Todos = ({ todo }) => {
  const [showTodo, setShowTodo] = useState(false);

  const toggleHandler = () => {
    setShowTodo(!showTodo);
  };

  return (
    <Container>
      <TodoBigName toggleHandler={toggleHandler} title={todo.title} />
      {showTodo && <TodoList todos={todo.todos} />}
    </Container>
  );
};

export default Todos;

const Container = styled.div`
  padding: 0 2em;
`;
