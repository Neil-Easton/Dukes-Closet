import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import CategoriesPreview from "./shop-routes/categories-preview/categories-preview.component";
import Category from "./shop-routes/category/category.component";
import { Route, Routes } from "react-router-dom";
import { CategoriesProvider } from "../../contexts/categories.context";
import { setCategoriesArray, fetchCategoriesStart } from "../../store/category/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
      <Routes>
        <Route index element={<CategoriesPreview />}/>
        <Route path="/:category" element={<Category />}/>
      </Routes>
  );

};

export default Shop;