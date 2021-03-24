import React from "react";
import { ConverthmsToRA, ConvertdmstoDEC } from "../backend/calculate";

var data = {
  target: "5 18 0.00 +0 0 0", //Target is speified in Ra(hr min sec) Dec(deg min sec)
  fov: 1.5, // field.Of.View
  showShareControl: true, //To show the share button
};
var Type = {
  P: "X-ray pulsars",
  T: "Transient X-ray source",
  U: "Ultra-Soft X-ray source",
  V: "Variable Source",
  A: "atoll source",
  B: "X-ray burst source",
  D: "Dipping low-mass X-ray binary",
  G: "globular-cluster X-ray source",
  Z: "Z-type",
};
function Aladin({ objects }, distance = "-1") {
  React.useEffect(() => {
    const factor = 2;
    let url = window.location.href; //To find the radius
    if (distance !== "-1") {
      data.fov = factor * parseFloat(distance);
    }
    if (objects.length) {
      data.target = `${objects[0].RAh} ${objects[0].RAm} ${objects[0].RAs} ${objects[0]["DE-"]}${objects[0].DEd} ${objects[0].DEm} ${objects[0].DEs}`;
    }
    let aladin = window.A.aladin("#aladin-lite-div", data);

    var overlay = window.A.graphicOverlay({ color: "#ee2345", lineWidth: 3 });
    aladin.addOverlay(overlay);
    var cat = window.A.catalog({
      name: "Markers",
      sourceSize: 12,
      color: "red",
    });
    aladin.addCatalog(cat);

    if (distance !== "-1") {
      // Drawing a cricle of inside of which all the points would be marked
      var cords = data.target.split(" ").map((x) => parseFloat(x));
      if (objects.length != 0) {
        cords = [
          objects[0].RAh,
          objects[0].RAm,
          objects[0].RAs,
          parseInt(objects[0]["DE-"] + "1") * objects[0].DEd,
          objects[0].DEm,
          objects[0].DEs,
        ];
      }
      overlay.add(
        window.A.circle(
          ConverthmsToRA(cords[0], cords[1], cords[2]),
          ConvertdmstoDEC(cords[3], cords[4], cords[5]),
          parseFloat(distance)
        )
      );
    }
    for (let i = 0; i < objects.length; i++) {
      cat.addSources([
        window.A.marker(
          ConverthmsToRA(objects[i].RAh, objects[i].RAm, objects[i].RAs),
          ConvertdmstoDEC(
            parseInt(objects[i]["DE-"] + "1") * objects[i].DEd,
            objects[i].DEm,
            objects[i].DEs
          ),
          {
            popupTitle: objects[i].name,
            popuDesc: `<em>Bmag:</em> ${
              objects[i].Vmag
            }<br/><em>Spectral type:</em> ${
              objects[i].SpType
            }<br/><em>Type:</em> ${Type[objects[i].type]}`,
          }
        ),
      ]);
    }
  }, [objects]);
  return <div id="aladin-lite-div" style={{ minHeight: "70vh" }} />;
}

export default Aladin;
