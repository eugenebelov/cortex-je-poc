import React, { FC } from "react";
import styled from "styled-components";

const AppHeader = styled.header`
  background-color: ${props => props.theme.main};
  color: ${props => props.theme.fontColor};
  min-height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.div``;

const PageHeader: FC = () => {
  return (
    <AppHeader>
      <div>Deloitte | Cortex JE</div>
      <div>
        <div>Notifications</div>
        <div>Help</div>
        <div>User</div>
      </div>
    </AppHeader>
  );
};

export default PageHeader;
