import React from "react";
import "tailwindcss/tailwind.css";
/* Every element inside objects has field as follows:
  1. Id, 2.DownloadLink, 3.ProposalId, 4. TargetId, 5. Observation, 6. PIName, 7. Orbit,
  8. SourceName, 9.Ra, 10. Dec, 11. Instrument, 12. DateOfObservation, 13. ReleaseDate, 14. Modes 
*/
let objects = [
  //array of objects containing all the fields inside the table
];

function Products() {
  return (
    <div>
      <h1 className="text-center text-3xl">Table of Products</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Download Link</th>
            <th>Proposal Id</th>
            <th>Target Id</th>
            <th>Observation Id</th>
            <th>PI Name</th>
            <th>Orbit</th>
            <th>Source Name</th>
            <th>RA</th>
            <th>DEC</th>
            <th>INSTRUMENT</th>
            <th>Date Of Observation</th>
            <th>Release Date</th>
            <th>Modes</th>
          </tr>
        </thead>
        <tbody>
          {objects.map((object) => (
            <tr id={object.id}>
              <td>{object.id}</td>
              <td>
                <a
                  href={object.DownloadLink}
                  className="underline hover:text-green-200"
                >
                  Click Here
                </a>
              </td>
              <td>{object.ProposalId}</td>
              <td>{object.TargetId}</td>
              <td>{object.ObservationId}</td>
              <td>{object.PIName}</td>
              <td>{object.Orbit}</td>
              <td>{object.SourceName}</td>
              <td>{object.Ra}</td>
              <td>{object.Dec}</td>
              <td>{object.Instrument}</td>
              <td>{object.DateOfObservation}</td>
              <td>{object.ReleaseDate}</td>
              <td>{object.Modes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
