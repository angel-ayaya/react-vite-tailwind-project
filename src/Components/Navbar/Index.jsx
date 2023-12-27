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
            onClick={() => context.setSearchByCategory("")}
          >
            Abarrotes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory("")}
            className={({ isActive }) => `${isActive ? activeStyle : ""}`}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => context.setSearchByCategory("clothes")}
            className={({ isActive }) => `${isActive ? activeStyle : ""}`}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) => `${isActive ? activeStyle : ""}`}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            onClick={() => context.setSearchByCategory("furniture")}
            className={({ isActive }) => `${isActive ? activeStyle : ""}`}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => context.setSearchByCategory("toys")}
            className={({ isActive }) => `${isActive ? activeStyle : ""}`}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => context.setSearchByCategory("shoes")}
            className={({ isActive }) => `${isActive ? activeStyle : ""}`}
          >
            Shoes
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
              {context.carProducts.length}
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
