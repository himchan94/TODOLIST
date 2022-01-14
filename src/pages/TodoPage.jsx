import Header from "../components/Header";
import Todos from "../components/Todos";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";

const TodoPage = () => {
  const list = useSelector((state) => state.todos);
  return (
    <Container>
      <Header />
      {list.map((todo, idx) => (
        <Todos key={todo.title} todo={todo} />
      ))}
    </Container>
  );
};

export default TodoPage;

const Container = styled.div``;
