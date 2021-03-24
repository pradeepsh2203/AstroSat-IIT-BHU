import React, { useState } from "react";
import Query from "./components/Query";
import Aladin from "./components/Aladin";
import "tailwindcss/tailwind.css";

let ObjectDetails = {
  // Edit this variable using the data retrived from or put some default values
  SourceName: "",
  RA: "",
  DEC: "",
  DateOfObservation: "",
  Orbit: "",
  ReleaseDate: "",
  ObservedByAstrosat: true,
  ProposalId: "",
  TargetId: "",
};

function App() {
  const [objects, setObjects] = useState([]);
  const [Distance, SetDistance] = useState(0.0);

  return (
    <div className="lg:grid lg:grid-cols-12">
      <div className="col-span-8">
        <Query
          setObjects={setObjects}
          distance={Distance}
          setDistance={SetDistance}
        />
        <Aladin objects={objects} distance={Distance} />
      </div>
      <div className="text-xl bg-gray-100 rounded-lg rounded-r-none p-2 col-span-4 min-h-screen min-w-min">
        <h1 className="text-center text-3xl">Object Details</h1>
        <ul className="list-inside border p-4 rounded-lg shadow list-decimal mt-6">
          <li>Source Name: {ObjectDetails.SourceName}</li>
          <li>RA: {ObjectDetails.RA}</li>
          <li>Dec: {ObjectDetails.DEC}</li>
          <li>Date Of Observation: {ObjectDetails.DateOfObservation}</li>
          <li>Orbit: {ObjectDetails.Orbit}</li>
          <li>Release Date: {ObjectDetails.ReleaseDate}</li>
          <li>
            Observed By Astrosat: {ObjectDetails.ObservedByAstrosat.toString()}
          </li>
          {ObjectDetails.ObservedByAstrosat && (
            <span>
              <li>Proposal Id: {ObjectDetails.ProposalId}</li>
              <li>Target Id: {ObjectDetails.TargetId}</li>
            </span>
          )}
        </ul>
        <p className="text-lg mt-4">
          To get complete list of the products visit{" "}
          <a href="/table" className="underline hover:text-green-200">
            Products Table
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
