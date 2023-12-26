import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"


const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white shadow-sm">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
          >
            Abarrotes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? activeStyle : ""}`}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => `${isActive ? activeStyle : ""}`}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => `${isActive ? activeStyle : ""}`}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            className={({ isActive }) => `${isActive ? activeStyle : ""}`}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => `${isActive ? activeStyle : ""}`}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sports"
            className={({ isActive }) => `${isActive ? activeStyle : ""}`}
          >
            Sports
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          <NavLink
            to="/mail"
            className={({ isActive }) => `${isActive ? activeStyle : ""}`}
          >
            example@123.com
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => `${isActive ? activeStyle : ""}`}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => `${isActive ? activeStyle : ""}`}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => `${isActive ? activeStyle : ""}`}
          >
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) => `${isActive ? activeStyle : ""} flex`}
          >

            <ShoppingBagIcon className="h-5 w-5" />
            <div>
              {context.count}
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
