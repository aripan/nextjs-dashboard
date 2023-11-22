import React, { useState } from "react";
// Define the Props interface
export interface IUsersPageProps {
  prop1: string;
  prop2: string;
  prop3: string;
}

const UsersPage: React.FunctionComponent<IUsersPageProps> = (props) => {
  return <div>UsersPage</div>;
};
export default UsersPage;
