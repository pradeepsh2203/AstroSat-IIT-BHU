// Convert degree to radian
function DegreeToRadian(degree) {
    return degree * (Math.PI / 180);
}

// get decimal part from a number
function getDecimalPart(number) {
    var decimal = number - Math.floor(number);
    var decimalPlaces = number.toString().split('.')[1].length;
    decimal = decimal.toFixed(decimalPlaces);
    return decimal;
}

/* 
This function is used to calculate other celestial bodies in the range of search celestial body.
It take the objects of search range query from database, distance to calculate and the seacrhed object.
it check each and every object with the searched object with the distance and returns the matched objects.

theta = cos-1(sin(delta1) * sin(delta2) + cos(delta1) * cos(delta2) * (cos(alpha1 - alpha2))
where, right ascension(ra), alpha E [0, 2*pie], and declination (dec), delta E [-pie / 2, pie / 2]
*/
export function checkDistance(objects, alpha1, delta1, distance) {
    var insideRange = [];

    // console.log(objects);
    alpha1 = DegreeToRadian(alpha1);
    delta1 = DegreeToRadian(delta1);

    for (var i = 0; i < objects.length; i++) {
        var alpha2 = DegreeToRadian(ConverthmsToRA(objects[i].RAh, objects[i].RAm, objects[i].RAs));
        var delta2 = DegreeToRadian(ConvertdmstoDEC(objects[i].DEd, objects[i].DEm, objects[i].DEs));

        const distanceBetweenObjects = Math.acos((Math.sin(delta1) * Math.sin(delta2)) + (Math.cos(delta1) * Math.cos(delta2) * Math.cos(Math.abs(alpha1 - alpha2))));
        // console.log(`radian distance: ${distanceBetweenObjects}, ${DegreeToRadian(distance)}`);
        if (DegreeToRadian(distance) >= distanceBetweenObjects) {
            insideRange.push(objects[i]);
        }
    }

    return insideRange;
}

// Convert right ascension(ra) in hours, min, sec
export function ConvertRAtohms(ra) {
    var hours = ra * (24 / 360);
    var min = getDecimalPart(hours) * 60;
    var sec = getDecimalPart(min) * 60;

    return [Math.floor(hours), Math.floor(min), Math.floor(sec)];
}

// Convert right ascension from hms to degree 
export function ConverthmsToRA(hours, min, sec) {
    var totalHours = hours + (min / 60) + (sec / 3600);
    return (360 / 24) * totalHours;
}

// Convert declination (dec) to degree, arcmin, arcsec
export function ConvertDECtodms(dec) {
    var arcmin = getDecimalPart(dec) * 60;
    var arcsec = getDecimalPart(arcmin) * 60;

    return [Math.floor(dec), Math.floor(arcmin * 60), Math.floor(arcsec * 3600)];
}

// Convert declination (dec) from degree, arcmin, arcsec to degree
export function ConvertdmstoDEC(degree, arcmin, arcsec) {
    var negDegree = false;
    if (degree < 0) {
        degree = Math.abs(degree);
        negDegree = true;
    }

    if (negDegree) {
        return -(degree + (arcmin / 60) + (arcsec / 3600));
    } else {
        return (degree + (arcmin / 60) + (arcsec / 3600));
    }
}