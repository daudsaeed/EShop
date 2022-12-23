import CategoryItem from "../category-item/CategoryItem.component";
import "./category-menu.style.scss";
const CategoryMenu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoryMenu;
