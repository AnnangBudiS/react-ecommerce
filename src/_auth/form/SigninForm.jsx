import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthCtx";
import useHttp from "../../hooks/useHttp";
import Input from "../../components/Shared/Input";

const initialData = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

const SigninForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    data: dataUser,
    sendRequest,
    error,
    loading,
  } = useHttp("https://dummyjson.com/auth/login", initialData);

  async function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const authData = Object.fromEntries(fd);
    sendRequest(JSON.stringify(authData));
  }

  if (dataUser && !error) {
    login(dataUser, dataUser?.token);
    navigate("/");
  }

  if (error) {
    return alert(error.message || "User Credential failed");
  }

  return (
    <div className="p-4 max-w-md">
      <h2 className="text-5xl font-bold">Hello ,</h2>
      <p className="text-2xl mb-5 italic text-gray-400">
        what do you want to shop for today?
      </p>
      <ul className="flex justify-center items-center gap-5 ">
        <li className="text-4xl p-2 bg-gray-100 rounded-full duration-150 hover:bg-gray-300/40 cursor-pointer">
          <FcGoogle />
        </li>
        <li className="text-4xl p-2 bg-gray-100 rounded-full duration-150 hover:bg-gray-300/40 cursor-pointer">
          <FaFacebook className="text-blue-500" />
        </li>
      </ul>
      <div className="flex gap-2 items-center w-full my-4">
        <div className="h-0.5 w-full bg-gray-300 " />
        <span className="text-gray-500">or</span>
        <div className="h-0.5 w-full bg-gray-300 " />
      </div>
      <form onSubmit={handleSubmit}>
        <Input label="username" text="Username" type="text" />
        <Input label="password" text="Password" type="password" />
        <div>
          <button className="w-full p-2 border border-gray-900 duration-150 font-semibold ease-linear hover:bg-gray-900 hover:text-gray-100 rounded">
            {loading ? "submit..." : "Login"}
          </button>
        </div>
        <p className="mt-2 text-gray-400">
          Dont have an account ?{" "}
          <Link
            to="/register"
            className="text-sky-500 ease-linear hover:underline hover:text-sky-400"
          >
            register
          </Link>
        </p>
      </form>
      <p className="mt-5 text-sm italic text-gray-400">
        This is an authentication demo, user and password can be taken from{" "}
        <Link
          to="https://dummyjson.com/docs/auth"
          className="hover:text-sky-400"
        >
          https://dummyjson.com/docs/auth
        </Link>
      </p>
    </div>
  );
};

export default SigninForm;
