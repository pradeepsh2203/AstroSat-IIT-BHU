import { ConvertDECtodms, ConvertdmstoDEC, ConverthmsToRA, ConvertRAtohms, checkDistance } from "./calculate";
import { db } from "./database";

const catalogBRef = db.collection("catalog");
const lowMassCatalogARef = db.collection("lowMassCatalog");
const highMassCatalogARef = db.collection("highMassCatalog");


/*
 * Asynchronous function returns a Promise
 * Promise resolves into an object containing the data
 */
export async function searchObject(name) {

  // first try to query the lowMassXrayCatalog
  const querySnapshot = await lowMassCatalogARef.where("name", "==", name).get();
  if (querySnapshot.size) {
    return querySnapshot.docs[0].data();
  }

  // query the highMassXrayCatalog if the object was not found in the lowMassXrayCatalog
  const querySnapshot1 = await highMassCatalogARef.where("name", "==", name).get();
  if (querySnapshot1.size) {
    return querySnapshot1.docs[0].data();
  } else {
    return null;
  }
}

// search for objects withing the angular distance
export async function searchNearby(object, distance) {
  // coordinates of the current object
  const RA = ConverthmsToRA(object.RAh, object.RAm, object.RAs);
  const DEC = ConvertdmstoDEC(object.DEd, object.DEm, object.DEs);

  // max and min values of Declination
  const DECmin = ConvertDECtodms(DEC - distance);
  const DECmax = ConvertDECtodms(DEC + distance);

  // filter on only Declination as firebase filter range for one field only
  const querySnapshot = await lowMassCatalogARef
    .where("DEd", ">=", DECmin[0])
    .where("DEd", "<=", DECmax[0])
    .get();

  const querySnapshot1 = await highMassCatalogARef
    .where("DEd", ">=", DECmin[0])
    .where("DEd", "<=", DECmax[0])
    .get();

  var data = [];

  querySnapshot.docs.forEach((doc) => data.push(doc.data()));
  querySnapshot1.docs.forEach((doc) => data.push(doc.data()));

  return checkDistance(data, RA, DEC, distance);
}


export async function searchCatalogB(objects) {
  return objects.map(
    (object) => {
      const querySnapshot = await catalogBRef.where("object_name", "==", object.name).limit(1).get();
      if (querySnapshot.size) return { ...object, astrosat: true }
      else return { ...object, astrosat: false }
    }
  )
}