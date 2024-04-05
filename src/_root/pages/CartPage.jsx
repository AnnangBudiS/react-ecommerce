import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartCtxt";
import { useAuth } from "../../contexts/AuthCtx";
import CartItem from "../../components/Shared/CartItem";
import Modal from "../../components/Shared/Modal";
import Checkout from "../../components/Shared/Checkout";
import { currencyFormatter } from "../../utils/formatter";

const CartPage = () => {
  const [checkout, setCheckout] = useState(false);
  const { token } = useAuth();
  const { items, addItem, removeItem, clearCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  function handleFinish() {
    if (!token) {
      return alert("you must be logged in");
    }
    if (token) {
      clearCart();
      navigate("/");
      alert("Payment Successful");
    }
  }

  function handleShowCheckout() {
    setCheckout(true);
  }

  function handleCloseModal() {
    setCheckout(false);
  }
  return (
    <>
      <Modal open={checkout}>
        <Checkout onClose={handleCloseModal} onFinish={handleFinish} />
      </Modal>
      <div className="bg-gray-200 min-h-screen py-20">
        <h2 className="text-center py-10 text-2xl font-bold">Your cart</h2>
        {items.length < 1 && (
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold py-2 mb-5">
              No Items in Cart :({" "}
            </h2>
            <Link to="/">
              <span className="px-6 py-2 bg-gray-900 duration-150 ease-linear hover:bg-gray-800 text-gray-100">
                Sopping Now
              </span>
            </Link>
          </div>
        )}
        {items.length > 0 && (
          <div className="flex gap-10 justify-center">
            <section className="p-4 bg-gray-100 rounded-lg shadow">
              <table className="table-auto text-center ">
                <thead className="border-b">
                  <tr>
                    <th className="px-6">Product</th>
                    <th className="px-6">Title</th>
                    <th className="px-6">Quantity</th>
                    <th className="px-6">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {items?.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onDecrease={() => removeItem(item.id)}
                      onIncrease={() => addItem(item)}
                    />
                  ))}
                </tbody>
              </table>
            </section>
            <section>
              <div className="p-4 bg-gray-100 rounded-lg shadow">
                <h2 className="font-bold">Payment</h2>
                <div className="flex items-center gap-12 my-2 text-sm">
                  <p>Total Amount :</p>
                  <p className="font-semibold">
                    {currencyFormatter.format(totalAmount)}
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Payment metode</p>
                  <select name="" id="" className="w-full my-2">
                    <option value="visa">Visa</option>
                    <option value="mastercard">MasterCard</option>
                    <option value="paypal">Paypal</option>
                  </select>
                </div>
                <div className="mt-10">
                  <button
                    onClick={handleShowCheckout}
                    className="w-full bg-gray-900 p-2 rounded text-gray-100 font-semibold hover:bg-gray-800"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
