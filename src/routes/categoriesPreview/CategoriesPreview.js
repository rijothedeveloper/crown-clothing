import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/categoryPreview/CategoryPreview";
import { selectCategoryMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoryMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
