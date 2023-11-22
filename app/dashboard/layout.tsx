import React, { useState } from "react";
import SidebarUI from "../ui/dashboard/sidebar/sidebar";
import NavbarUI from "../ui/dashboard/navbar/navbar";

export interface IDashboardLayoutProps {
  children: any;
}

const DashboardLayout: React.FunctionComponent<IDashboardLayoutProps> = ({
  children,
}) => {
  return (
    <div>
      <div>
        <SidebarUI />
      </div>
      <div>
        <NavbarUI />
      </div>
      {children}
    </div>
  );
};
export default DashboardLayout;
