import React, { useEffect, useState } from "react";
import Query from "./components/Query";
import Aladin from "./components/Aladin";
import "tailwindcss/tailwind.css";


function App() {
  const [objects, setObjects] = useState([]);
  const [Distance, SetDistance] = useState(0.0);

  const [ObjectDetails, setDetails] = useState({
    object_name: "",
    ra: "",
    dec: "",
    datetime_of_observation: "",
    proposal_id: "",
    target_id: "",
  });

  useEffect(() => {
    console.log(ObjectDetails);
  }, [ObjectDetails])

  return (
    <div className="lg:grid lg:grid-cols-12">
      <div className="col-span-8">
        <Query
          setObjects={setObjects}
          distance={Distance}
          setDistance={SetDistance}
          setDetails={setDetails}
        />
        <Aladin objects={objects} distance={Distance} />
      </div>
      <div className="text-xl bg-gray-100 rounded-lg rounded-r-none p-2 col-span-4 min-h-screen min-w-min">
        {
          ObjectDetails.object_name ? <>
            <h1 className="text-center text-3xl">Object Details</h1>
            <ul className="list-inside border p-4 rounded-lg shadow list-decimal mt-6">
              <li>Source Name: {ObjectDetails.object_name}</li>
              <li>RA: {ObjectDetails.ra}</li>
              <li>Dec: {ObjectDetails.dec}</li>
              <li>Date Of Observation: {ObjectDetails.datetime_of_observation}</li>
              {ObjectDetails.ObservedByAstrosat && (
                <span>
                  <li>Proposal Id: {ObjectDetails.proposal_id}</li>
                  <li>Target Id: {ObjectDetails.target_id}</li>
                </span>
              )}
            </ul>
            <p className="text-lg mt-4">
              To get complete list of the products visit{" "}
              <a href="/table" className="underline hover:text-green-200">
                Products Table
          </a>
            </p>
          </> : <p>Object not observed by ASTROSAT. Try searching something</p>
        }
      </div>
    </div>
  );
}

export default App;
