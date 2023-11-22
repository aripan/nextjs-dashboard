"use client";
import React, { useState } from "react";
import styles from "./menuLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface IMenuLinkProps {
  item: {
    title: string;
    path: string;
    icon: React.JSX.Element;
  };
}
const MenuLink: React.FunctionComponent<IMenuLinkProps> = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};
export default MenuLink;
