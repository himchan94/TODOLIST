import Header from "../components/Header";
import Todos from "../components/Todos";
import styled from "styled-components";

const TodoPage = () => {
  return (
    <Container>
      <Header />
      <Todos />
      <Todos />
      <Todos />
      <Todos />
    </Container>
  );
};

export default TodoPage;

const Container = styled.div``;
