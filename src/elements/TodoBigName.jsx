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
  background-image: url(${ArrowIcon}); /* 16px x 16px */
  background-color: transparent; /* make the button transparent */
  background-repeat: no-repeat; /* make the background image appear only once */
  border: none; /* assuming we don't want any borders */
  cursor: pointer; /* make the cursor like hovering over an <a> element */
  width: 0.563em;
  height: 0.375em; /* make this the size of your image */
  vertical-align: middle; /* align the text vertically centered */
  margin-left: 0.813em;
`;
