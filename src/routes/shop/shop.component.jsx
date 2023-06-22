import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoriesPreview from "./shop-routes/categories-preview/categories-preview.component";
import Category from "./shop-routes/category/category.component";
import { Route, Routes } from "react-router-dom";

const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path="/:category" element={<Category />}/>
    </Routes>
  );

};

export default Shop;