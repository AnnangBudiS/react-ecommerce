import { useAuth } from "../../contexts/AuthCtx";
import Input from "./Input";

const Checkout = ({ onClose, onFinish }) => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Shipping address</h2>
      <div className="flex gap-2">
        <Input text="First Name" value={user?.firstName} />
        <Input text="Last Name" value={user?.lastName} />
      </div>
      <Input text="Email" value={user?.email} />
      <Input text="Address" />
      <div className="flex gap-2">
        <Input text="City" />
        <Input text="Zip Code" />
      </div>
      <div className="flex items-center gap-4">
        <button
          className="bg-gray-900 text-gray-100 p-2 px-6 hover:bg-gray-100 hover:text-gray-900 duration-150 ease-linear"
          onClick={onClose}
        >
          Close
        </button>
        <button
          className="p-2 px-6 border border-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-150 ease-linear"
          onClick={onFinish}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Checkout;
