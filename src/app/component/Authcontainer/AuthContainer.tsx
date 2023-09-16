import React from "react";

type Props = {};

function AuthContainer(props: Props) {
  return (
    <div>
      <div className="flex w-[300px] items-center gap-[1rem] max-md:hidden p-4 flex-col rounded shadow-md uppercase bg-slate-400">
        <div className="flex w-full items-center justify-center flex-col">
          <h1 className="tracking-wide uppercase text-2xl">my account</h1>
        </div>
        <div className="flex w-full items-center justify-center ">
          <h1 className="justify-center uppercase text-[#832729] text-xs"> login to access to your account</h1>
        </div>
        <div className="flex w-full items-center justify-center gap-[5rem] flex-row uppercase">
          <div>
            <button className="border-[2px] border-[#832729] border-solid  py-1 px-4 font-[12px] tracking-wide rounded font-[nunitosansregular] text-black">
              Log in
            </button>
          </div>
          <div>
            <button className=" bg-[#c00] hover:bg-[#832729] text-white font-[12px] py-1 px-4 tracking-wide rounded font-[nunitosansregular]">
              sign up
            </button>
          </div>
        </div>
        <div >
          <h1 className="items-center tracking-wide uppercase ">
            click here to <span className=" text-[#c00] cursor-pointer">contact us</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AuthContainer;
