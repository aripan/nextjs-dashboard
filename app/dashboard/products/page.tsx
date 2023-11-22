import React, { useState } from "react";
// Define the Props interface
export interface IProductsPageProps {
  prop1: string;
  prop2: string;
  prop3: string;
}

const ProductsPage: React.FunctionComponent<IProductsPageProps> = (props) => {
  return <div>ProductsPage</div>;
};
export default ProductsPage;
