import { Link } from "react-router-dom";
import { currencyFormatter } from "../../utils/formatter";

const ProductItem = ({ item, addToCart, detail }) => {
  return (
    <li className="w-[240px] bg-gray-100 rounded-lg shadow">
      <Link to={detail}>
        <img
          src={item.thumbnail}
          alt={item.title}
          className="object-contain h-52 w-full"
        />
      </Link>
      <div className="p-2">
        <p className="font-semibold text-sm">{item.title}</p>
        <p className="text-xl font-bold">
          {currencyFormatter.format(item.price)}
        </p>
        <div>
          <button
            onClick={addToCart}
            className="w-full p-2 bg-gray-900 text-gray-100 font-semibold rounded my-2"
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
