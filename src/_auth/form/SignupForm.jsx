import { Link } from "react-router-dom";
import Input from "../../components/Shared/Input";

const SignupForm = () => {
  return (
    <div className="p-4">
      <h2 className="text-5xl font-bold">Hello ,</h2>
      <p className="text-2xl mb-5 italic text-gray-400">
        Join and get various discount vouchers
      </p>
      <form>
        <div className="flex items-center gap-2">
          <Input label="firstName" text="Fisrt Name" type="text" />
          <Input label="lastName" text="Last Name" type="text" />
        </div>
        <div className="flex items-center gap-2">
          <Input label="email" text="Email" type="email" required />
          <Input label="password" text="Passsword" type="password" />
        </div>
        <Input label="address" text="Address" type="text" />
        <div>
          <button className="w-full p-2 border border-gray-900 duration-150 font-semibold ease-linear hover:bg-gray-900 hover:text-gray-100 rounded">
            Register
          </button>
        </div>
        <p className="mt-2 text-gray-400">
          allready have account ?{" "}
          <Link
            to="/login"
            className="text-sky-500 ease-linear hover:underline hover:text-sky-400"
          >
            login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
