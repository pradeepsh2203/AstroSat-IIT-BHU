/* 
This function is used to calculate other celestial bodies in the range of search celestial body.
It take the objects of search range query from database, distance to calculate and the seacrhed object.
it check each and every object with the searched object with the distance and returns the matched objects.

theta = cos-1(sin(delta1) * sin(delta2) + cos(delta1) * cos(delta2) * (cos(alpha1 - alpha2))
where, right ascension(ra), alpha E [0, 2*pie], and declination (dec), delta E [-pie / 2, pie / 2]
*/

function DegreeToRadian(degree) {
    return degree * (Math.PI / 180);
}

function checkDistance(objects, alpha1, delta1, distance) {
    var insideRange = [];

    for (var i = 0; i < objects.length(); i++) {
        const delta2 = DegreeToRadian(objects[i].ra), alpha2 = DegreeToRadian(objects[i].dec);
        alpha1 = DegreeToRadian(alpha1); delta1 = DegreeToRadian(delta1);
        const distanceBetweenObjects = Math.acos((Math.sin(delta1) * Math.sin(delta2)) + (Math.cos(delta1) * Math.cos(delta2) * Math.cos(Math.abs(alpha1 - alpha2))));
        if (distance >= distanceBetweenObjects) {
            insideRange.push(objects[i]);
        }
    }

    return insideRange;
}