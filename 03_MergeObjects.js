function displayError() {
  console.log("Error: Invalid input");
  return null;
}

function isExists(arrayToCheck, valueToCheck) {
  for (let val of arrayToCheck) {
    if (val === valueToCheck) return true;
  }
  return false;
}

function addToObject(inputObject, uniqueObject) {
  for (let key in inputObject) {
    key = key.toLowerCase();
    const value = inputObject[key];

    if (!Array.isArray(value)) continue;

    if (!uniqueObject[key]) {
      let tempArray = [];
      for (let i of value) {
        i = i.toLowerCase();
        tempArray.push(i);
      }

      uniqueObject[key] = tempArray;
    } else {
      for (let key2 of value) {
        key2 = key2.toLowerCase();

        if (!isExists(uniqueObject[key], key2)) uniqueObject[key].push(key2);
      }
    }
  }
}

function mergeObjects(objectOne, objectTwo) {
  let uniqueObject = {};
  const prototypeOfObject = Object.getPrototypeOf(uniqueObject);

  if (
    Object.getPrototypeOf(objectOne) !== prototypeOfObject ||
    Object.getPrototypeOf(objectTwo) !== prototypeOfObject
  )
    return displayError();

  addToObject(objectOne, uniqueObject);
  addToObject(objectTwo, uniqueObject);

  return uniqueObject;
}

console.log(
  mergeObjects(
    { fruits: ["apple", "mango","apple"], veggies: ["beans"], other: ["abc", "aaa"] },
    { Fruits: ["banana"], veggies: ["beans"], drinks: ["water"], adf: "dfdf" }
  )
);
