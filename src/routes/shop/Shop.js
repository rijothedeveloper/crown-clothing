import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { setCategoriesAction } from "../../store/categories/categories.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import CategoriesPreview from "../categoriesPreview/CategoriesPreview";
import Category from "../category/Category";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesAction(categoryMap));
    };
    getCategoriesMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
