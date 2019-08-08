import React, { FC } from "react";
import * as style from "./style";

const PageHeader: FC = () => {
  return (
    <style.AppHeader>
      <div>Deloitte | Cortex JE</div>
      <div>
        <div>Notifications</div>
        <div>Help</div>
        <div>User</div>
      </div>
    </style.AppHeader>
  );
};

export default PageHeader;
