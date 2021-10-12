import styled from "styled-components";

export const SquarConteiner = styled.div`
  max-width: 200px;
  max-height: 200px;
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
`;

export const Box = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  background-color: ${(props) => props.inputColor ? 'white' : 'blue'};
  transition: all ease-out 0.3s;
  &:hover {
      background-color: white;
  }
`

export const BoxText = styled.h3`
   padding-top: 20px;
`;