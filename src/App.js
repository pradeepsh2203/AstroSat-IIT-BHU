import React from "react";
import Query from "./components/Query";
import Aladin from "./components/Aladin";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="lg:grid lg:grid-cols-12">
      <div className="col-span-7">
        <Query />
        <Aladin />
      </div>
      <div className="bg-gray-100 rounded-lg rounded-r-none p-2 col-span-5 min-h-screen min-w-min">
        <h1 className="">Table</h1>
      </div>
    </div>
  );
}

export default App;
