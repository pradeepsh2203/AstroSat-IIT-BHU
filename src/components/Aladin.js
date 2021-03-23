import React from "react";

var data = {
  target: "5 18 0.00 +0 0 0", //Target is speified in Ra(hr min sec) Dec(deg min sec)
  fov: 1.5, // field.Of.View
  showShareControl: true, //To show the share button
};

function Aladin() {
  React.useEffect(() => {
    let aladin = window.A.aladin("#aladin-lite-div", data);
    var cat = window.A.catalog({
      name: "Markers",
      sourceSize: 22,
      color: "red",
    });
    aladin.addCatalog(cat);
    cat.addSources([
      window.A.marker(56.87115, 24.10514, {
        popupTitle: "Alcyone",
        popupDesc:
          '<em>Bmag:</em> 2.806<br/><em>Spectral type:</em> B7III<br/>More info <a target="_blank" href="https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME%20ALCYONE&submit=submit">in Simbad</a>',
      }),
    ]);
    cat.addSources([
      window.A.marker(57.29673, 24.13671, {
        popupTitle: "Pleione",
        popupDesc:
          '<em>Bmag:</em> 4.97<br/><em>Spectral type:</em> B8vne<br/>More info <a target="_blank" href="https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+PLEIONE&NbIdent=1">in Simbad</a>',
      }),
    ]);
    cat.addSources([
      window.A.marker(56.58156, 23.94836, {
        popupTitle: "Merope",
        popupDesc:
          '<em>Bmag:</em> 4.113<br/><em>Spectral type:</em> BVI4e<br/>More info <a target="_blank" href="https://simbad.u-strasbg.fr/simbad/sim-id?Ident=V*+V971+Tau&NbIdent=1">in Simbad</a>',
      }),
    ]);
    cat.addSources([
      window.A.marker(56.45669, 24.36775, {
        popupTitle: "Maia",
        popupDesc:
          '<em>Bmag:</em> 3.812<br/><em>Spectral type:</em> B8III<br/>More info <a target="_blank" href="https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+MAIA&NbIdent=1">in Simbad</a>',
      }),
    ]);
    cat.addSources([
      window.A.marker(56.2189, 24.11334, {
        popupTitle: "Electra",
        popupDesc:
          '<em>Bmag:</em> 3.612<br/><em>Spectral type:</em> B6IIIe<br/>More info <a target="_blank" href="https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+ELECTRA&NbIdent=1">in Simbad</a>',
      }),
    ]);
    cat.addSources([
      window.A.marker(57.29059, 24.05342, {
        popupTitle: "Atlas",
        popupDesc:
          '<em>Bmag:</em> 3.54<br/><em>Spectral type:</em> B8III<br/>More info <a target="_blank" href="https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+ATLAS&NbIdent=1">in Simbad</a>',
      }),
    ]);
    cat.addSources([
      window.A.marker(56.30207, 24.46728, {
        popupTitle: "Taygeta",
        popupDesc:
          '<em>Bmag:</em> 4.199<br/><em>Spectral type:</em> B6IV<br/>More info <a target="_blank" href="https://simbad.u-strasbg.fr/simbad/sim-id?Ident=NAME+TAYGETA&NbIdent=1">in Simbad</a>',
      }),
    ]);
  }, []);
  return <div id="aladin-lite-div" />;
}

export default Aladin;
