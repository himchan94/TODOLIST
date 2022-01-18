import styled from "styled-components";
import FolderIcon from "../images/folder.svg";
import BarIcon from "../images/bar.svg";
import ArrowIcon from "../images/downArrow.svg";

const TodoBigName = ({ toggleHandler, title }) => {
  return (
    <Container>
      <FolderImage />
      <TodoName>{title}</TodoName>
      <BarImage />
      <ArrowButton onClick={toggleHandler} />
    </Container>
  );
};

export default TodoBigName;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1.75em;
`;

const FolderImage = styled.img.attrs({
  src: `${FolderIcon}`,
})`
  width: 1.125em;
  height: 0.875em;
  maring-left: 0.188em;
`;

const TodoName = styled.b`
  font-size: 0.936em;
  margin-left: 0.563em;
`;

const BarImage = styled.img.attrs({
  src: `${BarIcon}`,
})`
  width: 11.125em;
  margin-left: 0.813em;
`;

const ArrowButton = styled.a`
  padding: 0;
  background-image: url(${ArrowIcon});
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  width: 0.563em;
  height: 0.375em;
  vertical-align: middle;
  margin-left: 0.813em;
`;
