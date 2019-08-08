import styled from "styled-components";

export const AppHeader = styled.header`
  background-color: ${props => props.theme.main};
  color: ${props => props.theme.fontColor};
  min-height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
