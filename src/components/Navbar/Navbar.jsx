import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full sticky top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-xl md:text-2xl cursor-pointer flex items-center text-gray-800">
          <div className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#5E3BEE"
              class="bi bi-code-slash"
              viewBox="0 0 16 16"
            >
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
            </svg>
          </div>
          <div>Hijriyanto Wahyudi</div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-4 top-5 cursor-pointer md:hidden"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          )}
        </div>

        <div
          className={`md:flex  shadow-md md:shadow-none md:items-center  absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 duration-[400ms] ${
            open ? "top-[55px]" : "top-[-490px]"
          }`}
        >
          <div className="md:ml-8 text-xl mt-1 md:mt-0 mb-4 md:mb-0 flex flex-col md:flex-row md:gap-5 ">
            <a
              href="#home"
              className="text-gray-800 hover:text-[#5E3BEE] duration-500 "
            >
              <div className="items-center">Home</div>
            </a>
            <a
              href="#services"
              className="text-gray-800 hover:text-[#5E3BEE] duration-200 "
            >
              <div className="items-center">Services</div>
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-[#5E3BEE] duration-200 "
            >
              <div className="items-center">About</div>
            </a>
            <a
              href="#skill"
              className="text-gray-800 hover:text-gray-400 duration-200 "
            >
              <div className="items-center">Skill</div>
            </a>
            <a
              href="#project"
              className="text-gray-800 hover:text-gray-400 duration-200 "
            >
              <div className="items-center">Project</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
