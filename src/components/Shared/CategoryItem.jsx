const CategoryItem = ({ item, onChange }) => {
  return (
    <li className="text-sm mb-3">
      <button className="hover:font-semibold" value={item} onClick={onChange}>
        {item}
      </button>
    </li>
  );
};

export default CategoryItem;
