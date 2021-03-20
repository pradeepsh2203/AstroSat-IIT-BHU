import React, { Component } from "react";
import "tailwindcss/tailwind.css";
const Query = () => {
  return (
    <div className="Query mx-48 font-mono oldstyle-nums text-blue-500">
      <h1 className="pt-14   text-4xl text-center border-b-2 border-black bold mb-4">
        Input the Cosmic Source:
      </h1>
      <form className="inline inherit" id="form1">
        <input
          className="w-5/12 border-2 border-red-400 focus:border-red-600 focus:rounded-lg shadow-md rounded-lg mr-2 ml-56 pl-4 placeholder-red-300"
          type="text"
          name="Id"
          placeholder="Id for ex:- M31,sirius"
        ></input>
      </form>
      <button
        type="submit"
        form="form1"
        value="Submit"
        className="inline-block bg-purple-600 bg-opacity-50 p-1 rounded-full ring-4 ring-purple-200 transition duration-500 ease-in-out transform  hover:scale-110"
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
  );
};

export default Query;
