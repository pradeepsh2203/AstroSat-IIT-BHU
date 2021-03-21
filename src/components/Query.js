import React from "react";
import "tailwindcss/tailwind.css";
const Query = () => {
  return (
    <div className="Query font-mono text-blue-500">
      <h1 className="pt-12 text-4xl md:text-center lg:text-center border-b-2 border-black bold mb-4">
        Input the Cosmic Source:
      </h1>
      <div className="realtive">
        <form
          className="absolute left-2 md:left-1/4 lg:left-1/4 md:w-1/3 lg:w-1/3 w-1/2"
          id="form1"
        >
          <input
            className="w-full border-2 border-red-400 focus:border-red-600 focus:rounded-lg shadow-md rounded-lg pl-4 placeholder-red-300"
            type="text"
            name="Id"
            placeholder="Id for ex:- M31,sirius"
          ></input>
          <div className="block my-2">
            <label for="Radius">Radius:</label>
            <input
              className=" border-2 border-red-400  shadow-md rounded-lg pl-4"
              type="text"
              name="Radius"
              value="1.0"
            ></input>
          </div>
        </form>
        <button
          type="submit"
          form="form1"
          value="Submit"
          className="absolute right-2 sm:right-24 md:right-1/4 lg:right-1/4  bg-purple-600 bg-opacity-50 p-1 rounded-full ring-4 ring-purple-200 transition duration-500 ease-in-out transform  hover:scale-110"
        >
          <span>
            Search
            <svg
              className="w-6 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Query;
