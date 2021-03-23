import React from "react";

function Products() {
  return (
    <div>
      <h1 className="text-center text-3xl">Table of Products</h1>
      <table>
        <thead>
          <tr>
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
          <tr>
            <td>ABC</td>
            <td>ABC</td>
            <td>ABC</td>
            <td>ABC</td>
            <td>ABC</td>
            <td>ABC</td>
            <td>ABC</td>
            <td>ABC</td>
            <td>ABC</td>
            <td>ABC</td>
            <td>ABC</td>
            <td>ABC</td>
            <td>ABC</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Products;
