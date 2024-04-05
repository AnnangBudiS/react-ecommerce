import { useState } from "react";
import { useCart } from "../../contexts/CartCtxt";
import CategoryItem from "../../components/Shared/CategoryItem";
import ProductItem from "../../components/Shared/ProductItem";
import useHttp from "../../hooks/useHttp";

const ProductPage = () => {
  const [btnValue, setBtnValue] = useState("");
  const { addItem } = useCart();
  const { data: categories } = useHttp(
    "https://dummyjson.com/products/categories"
  );

  const {
    data: isProduct,
    loading,
    error,
  } = useHttp(
    btnValue
      ? `https://dummyjson.com/products/category/${btnValue}`
      : "https://dummyjson.com/products"
  );

  const product = isProduct?.products;

  if (loading) {
    return <p>Loading ....</p>;
  }

  if (error) {
    return;
  }

  const handleChange = (e) => {
    setBtnValue(e.target.value);
  };

  const handleShowAll = () => {
    setBtnValue("");
  };

  return (
    <div className="flex gap-24 container mx-auto py-20">
      <ul className="h-[800px] rounded-lg shadow bg-gray-100  sticky top-20 w-56 p-4">
        <h2 className="text-xl font-semibold mb-4">Category</h2>
        <li className="text-sm mb-2">
          <button onClick={handleShowAll} className="hover:font-semibold">
            All Product
          </button>
        </li>
        {categories?.map((item, index) => (
          <CategoryItem key={index} item={item} onChange={handleChange} />
        ))}
      </ul>
      <div>
        <ul className=" grid  md:grid-cols-4 lg:grid-cols-5 gap-4">
          {product?.map((item) => (
            <ProductItem
              key={item.id}
              item={item}
              addToCart={() => addItem(item)}
              detail={`/products/${item.id}/detail`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductPage;
