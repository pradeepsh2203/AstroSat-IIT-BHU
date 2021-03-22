import { db } from './database';

var catalogRef = db.collection('catalog');

export function searchObject(name) {
    return catalogRef.where('object_name', '==', name).get();
}