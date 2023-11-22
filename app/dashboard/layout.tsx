import React, { useState } from "react";
import SidebarUI from "../ui/dashboard/sidebar/sidebar";
import NavbarUI from "../ui/dashboard/navbar/navbar";
import styles from "../ui/dashboard/dashboard.module.css";
import FooterUI from "../ui/dashboard/footer/footer";

export interface IDashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FunctionComponent<IDashboardLayoutProps> = ({
  children,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SidebarUI />
      </div>
      <div className={styles.content}>
        <NavbarUI />
        {children}
        {/* I will change the footer later */}
        {/* <FooterUI /> */}
      </div>
    </div>
  );
};
export default DashboardLayout;
