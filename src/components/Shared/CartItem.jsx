import { currencyFormatter } from "../../utils/formatter";

const CartItem = ({ item, onDecrease, onIncrease }) => {
  return (
    <tr className="border-b">
      <td className="py-4 px-8">
        <img src={item.thumbnail} alt="asd" className="w-24" />
      </td>
      <td className="py-4 px-8">{item.title}</td>
      <td className="py-4 px-8 space-x-4">
        <button
          onClick={onDecrease}
          className="bg-gray-200 hover:bg-gray-100 px-2 rounded shadow"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={onIncrease}
          className="bg-gray-200 hover:bg-gray-100 px-2 rounded shadow"
        >
          +
        </button>
      </td>
      <td className="py-4 px-8">{currencyFormatter.format(item.price)}</td>
    </tr>
  );
};

export default CartItem;
