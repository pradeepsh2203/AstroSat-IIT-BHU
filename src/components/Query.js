import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { searchObject } from "../backend/query";
const Query = ({ setObjects }) => {

  const [query, setQuery] = useState('');

  const search = () => {
    searchObject(query).then(
      (obj) => {
        setObjects([obj]);
        console.log(obj);
      }
    )
  }

  return (
    <div className="flex flex-wrap px-6 bg-gray-100 bg-opacity-25 py-2 justify-between">
      <h1 className="inline-block">Input the Cosmic Source:</h1>
      <div className="">
        <input
          className="border rounded flex-grow"
          type="text"
          name="Id"
          placeholder="Id for ex:- M31,sirius"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        ></input>
        <input
          className="border rounded max-w-max"
          type="text"
          name="Radius"
          value="1.0"
        ></input>
        <button
          value="Search"
          className="flex items-center justify-center px-4 border inline-block rounded"
          onClick={search}
        >
          <svg
            class="h-4 w-4 text-grey-dark"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Query;
