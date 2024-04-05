import { useParams } from "react-router-dom";
import { useCart } from "../../contexts/CartCtxt";
import useHttp from "../../hooks/useHttp";
import { currencyFormatter } from "../../utils/formatter";

const DetailPages = () => {
  const { addItem } = useCart();
  const { id } = useParams();
  const {
    data: detail,
    loading,
    error,
  } = useHttp("https://dummyjson.com/products/" + id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-gray-200 pt-20 min-h-screen p-4 lg:px-96">
      <div className="flex gap-8 justify center">
        <div className="h-screen sticky top-20">
          <img src={detail?.thumbnail} alt={detail?.title} />
        </div>
        <ul>
          <li className="text-2xl font-bold">{detail?.title}</li>
          <li className="flex items-center gap-4 py-2">
            <span className="font-bold text-orange-400">{detail?.rating}</span>
            <span>Brand: {detail?.brand}</span>
            <span>Stock: {detail?.stock}</span>
          </li>
          <li>
            <p>{detail?.description}</p>
            <p className="text-2xl font-bold my-4">
              {currencyFormatter.format(detail?.price)}{" "}
            </p>
          </li>
          <li className="pb-5 border-b border-gray-900">
            <button
              onClick={() => addItem(detail)}
              className="border border-gray-900 px-10 p-2 font-semibold rounded duration-150 ease-linear hover:border-none hover:bg-gray-900 hover:text-gray-100"
            >
              Add to cart
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailPages;
