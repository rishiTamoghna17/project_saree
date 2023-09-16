import React from "react";
import Search from "../SearchBar/Search";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import AuthContainer from "@/app/component/Authcontainer/AuthContainer";
type Props = {};
function Navbar(props: Props) {
  return (
    <div>
      <div className="flex items-center justify-center py-4 relative w-full bg-[#F2E9E9]">
        <div className="flex items-center justify-between md:space-x-10 w-[1280px]  lg:space-x-20">
          <div>
            <a href="/">
              <Image width={80} src={logo} alt="logo" />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Search />
          </div>
          <nav className="max-md:hidden">
            <ul className="flex items-center lg-space-x-7 gap-[30px] opacity-70 text-[15px]">
              <li className="group relative">
                <a href="/" className="py-3 inline-block w-full group">
                  <div className="flex flex-col items-center justify-center gap-[5px]">
                    <div>
                      <FaRegUser size={24} color="#832729" />
                    </div>
                    <span className="tracking-wide uppercase">account</span>
                  </div>
                </a>
                <div className="hidden group-hover:block absolute top-full left-0 right-0 border-b-4 border-[#832729] mt-[1rem]"></div>
                <div className="hidden group-hover:block absolute top-full right-[-8rem] mt-5">
                  <AuthContainer />
                </div>
              </li>
              <li>
                <a href="/" className="py-3 inline-block w-full">
                  <div className="flex flex-col items-center justify-center gap-[5px]">
                    <div>
                      <AiOutlineHeart size={24} color="#832729" />
                    </div>

                    <span className="tracking-wide uppercase">wishlist</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/" className="py-3 inline-block w-full">
                  <div className="flex flex-col items-center justify-center gap-[5px]">
                    <div>
                      <BiCart size={24} color="#832729" />
                    </div>
                    <span className="tracking-wide uppercase">cart</span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
