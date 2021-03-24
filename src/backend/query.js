import { db } from "./database";

var catalogRef = db.collection("catalog");

/* Asynchronous function returns a Promise
 * Promise resolves into an object containing the data
 */
export async function searchObject(name) {
  const query = await catalogRef.where("object_name", "==", name).get();
  if (query.size) {
    return query.docs[0].data();
  } else {
    return null;
  }
}
