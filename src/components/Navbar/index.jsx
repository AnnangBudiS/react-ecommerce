import { Link, NavLink, useNavigate } from "react-router-dom";
import { DATA_NAVBAR } from "../../data/data";

import { FaShoppingBag } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthCtx";
import { useCart } from "../../contexts/CartCtxt";

const Navbar = () => {
  const { token, user, logout } = useAuth();
  const navigate = useNavigate();
  const { items } = useCart();

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed z-[1] w-full p-4 shadow-md bg-white">
      <nav className="flex items-center justify-between container mx-auto">
        <a className="text-xl font-bold">Recommerce</a>
        <ul className="flex items-center gap-5">
          {DATA_NAVBAR.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? "uppercase font-bold" : "uppercase text-gray-400"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-10">
          <Link to="/cart">
            <button className="relative p-1 bg-gray-300/30 duration-100 ease-linear hover:bg-gray-300/90 rounded-full">
              <FaShoppingBag />
              {items.length < 1 ? undefined : (
                <span className="absolute bottom-4 bg-red-500 text-gray-100 px-1 rounded-full text-[11px]">
                  {totalQuantity}
                </span>
              )}
            </button>
          </Link>
          {!token && <NavLink to="/login">Login</NavLink>}
          {token && (
            <li className="flex items-center gap-4">
              <NavLink to="/profile">
                <img
                  src={user?.image}
                  alt={user?.fisrtName}
                  className="w-8 h-8 rounded-full"
                />
              </NavLink>
              <button onClick={() => logout(navigate("/login"))}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
