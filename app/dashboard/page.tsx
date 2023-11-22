import React, { useState } from "react";
// Define the Props interface
export interface IDashboardPageProps {
  prop1: string;
  prop2: string;
  prop3: string;
}

const DashboardPage: React.FunctionComponent<IDashboardPageProps> = (props) => {
  return <div>DashboardPage</div>;
};
export default DashboardPage;
