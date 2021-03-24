import { ConvertDECtodms, ConvertdmstoDEC, ConverthmsToRA, ConvertRAtohms, checkDistance } from "./calculate";
import { db } from "./database";

const catalogBRef = db.collection("catalog");
const lowMassCatalogARef = db.collection("lowMassCatalog");
const highMassCatalogARef = db.collection("highMassCatalog");
const catalogCRef = db.collection("publications");

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

  querySnapshot.docs.forEach((doc) => {
    if (doc.data().name !== object.name)
      data.push(doc.data());
  });
  querySnapshot1.docs.forEach((doc) => {
    if (doc.data().name !== object.name)
      data.push(doc.data());
  });

  return checkDistance([object, ...data], RA, DEC, distance);
}


// function for querying and checkin in catalog B
export async function searchCatalogB(objects) {

  for (var i = 0; i < objects.length; i++) {
    var querySnapshot = await catalogBRef.where("object_name", "==", objects[i].name).limit(1).get();
    if (querySnapshot.size) objects[i].astrosat = true;
    else objects[i].astrosat = false;
  }

  return objects;
}

export async function getObjectFromCatalogB(object_name) {
  const querySnapshot1 = await catalogBRef.where("name", "==", object_name).get();
  if (querySnapshot1.size) {
    return querySnapshot1.docs[0].data();
  } else {
    return null;
  }
}

export async function searchPublications(object_name) {
  const querySnapshot = await catalogCRef.where("name", "array-contains", object_name).get();
  if (querySnapshot.size) {
    return querySnapshot.docs[0].data();
  } else {
    return null;
  }
}
