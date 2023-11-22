"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";

export interface ISearchUIProps {
  placeholder: string;
}

const SearchUI: React.FC<ISearchUIProps> = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default SearchUI;
