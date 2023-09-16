import React from "react";
import { BiSearch } from "react-icons/bi";
type Props = {};

const Search = (props: Props) => {
  return (
    <div>
        <div className="flex items-center bg-gray-100 w-[480px] h-[42px]  p-2 rounded-[.1875rem] max-md:hidden">
            <button ><BiSearch size={20} className="opacity-50"/></button>
            <input type="text" placeholder="Search for anything" className="bg-transparent outline-none ml-2 caret-blue-500 placeholder:font-light placeholder:text-gay-600 text-[15px]" autoComplete="false"/>
        </div>
     </div>
  );
};

export default Search;
