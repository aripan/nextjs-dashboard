import React, { useState } from "react";
import CardUI from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/dashboard.module.css";
import TransactionsUI from "../ui/dashboard/transactions/transactions";
import ChartUI from "../ui/dashboard/chart/chart";
import RightbarUI from "../ui/dashboard/rightbar/rightbar";
// Define the Props interface
export interface IDashboardPageProps {
  prop1: string;
  prop2: string;
  prop3: string;
}

const DashboardPage: React.FunctionComponent<IDashboardPageProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <CardUI />
          <CardUI />
          <CardUI />
        </div>
        <TransactionsUI />
        <ChartUI />
      </div>
      <div className={styles.side}>
        <RightbarUI />
      </div>
    </div>
  );
};
export default DashboardPage;
