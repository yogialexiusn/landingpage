import React, { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import { productCardData } from "../News/ProductData";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const [data, setData] = useState(productCardData);
  console.log("togi = ", productCardData);
  return (
    <ProductContext.Provider value={{ contextData: [data, setData] }}>
      <Outlet />
    </ProductContext.Provider>
  );
};
