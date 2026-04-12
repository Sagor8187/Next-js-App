"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { Mycontext } from "../context/Cartcontext";

export default function Navbar() {
  const pathname = usePathname();
  const {cart} = useContext(Mycontext)
  const isActive = (path) => pathname.startsWith(path);

  const linkClass = (path) =>
    `transition ${
      isActive(path)
        ? "text-green-500 border-b-2 border-green-500"
        : "text-black"
    }`;

  return (
    <div className="navbar bg-base-100 shadow-sm">

      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            <li>
              <Link className={linkClass("/allproduct")} href="/allproduct">
                All Product
              </Link>
            </li>

            <li>
              <Link className={linkClass("/cart")} href="/cart">
                Cart
              </Link>
            </li>

            <li>
              <Link className={linkClass("/review")} href="/review">
                Review
              </Link>
            </li>
          </ul>
        </div>

        <Link href="/" className="btn btn-ghost text-xl font-bold text-green-500">
          Meal<span className="text-red-600">Store</span>
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">

          <li>
            <Link className={linkClass("/allproduct")} href="/allproduct">
              All Product
            </Link>
          </li>

          <li className="flex relative flex-row ">
            <Link className={linkClass("/cart")} href="/cart">
              Cart
              <span className="absolute right-1 top-1 text-red-500 font-bold">{cart.length}</span>
            </Link>
            
          </li>

          <li>
            <Link className={linkClass("/review")} href="/review">
              Review
            </Link>
          </li>

        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        <button className="btn">Sign Up</button>
      </div>

    </div>
  );
}