"use client";

import styles from "./pagination.module.css";

export interface IPaginationUIProps {}

const PaginationUI: React.FC<IPaginationUIProps> = (props) => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous</button>
      <button className={styles.button}>Next</button>
    </div>
  );
};

export default PaginationUI;
