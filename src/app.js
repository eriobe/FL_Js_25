import { fetchGistAirports } from "./fetch.js";
import { AIRPORTS } from "./airports.db.js";

const airports = await fetchGistAirports();
console.table(airports);

function maxElevation() {
  let elevation = 0;

  for (const apt of airports) {
    if (apt.elevationM > elevation) {
      elevation = apt.elevationM;
    }
  }
  return elevation;
}

function avgPassengersPerFlight(airport) {
  return airport.passengersPerYear / airport.flightsPerYear;
}

function getName(firstname, lastname) {
  if (!firstname) return lastname;
  return lastname;
}

const name = getName("Erik");
console.log(name);
function maxElevation2() {
  let elevation = 0;
  let avg = 0;
  for (const apt of AIRPORTS) {
    if (apt.elevationM > elevation) {
      elevation = apt.elevationM;
      avg = avgPassengersPerFlight(apt);
    }
  }
  return AIRPORTS.filter((a) => a.elevationM == elevation);
}

// MAP ger mig en kopia!
function getAvgPassengers() {
  return AIRPORTS.map((a) => ({
    name: a.name,
    iata: a.iata,
    avgPassengersPerFlight: avgPassengersPerFlight(a).toFixed(1),
  }));
}

let data = getAvgPassengers();
console.table(data);
const elevation = maxElevation2();
console.log(elevation);
/*console.log("allt fungerar");

// variabler
// nej inte var
var myVar = "erik";
console.log(myVar);

// skapa en dynamisk variabel med let
let myName = "Erik";
myName = 12;
console.log(myName);

myName = "Erik 2.0";
console.log(myName);

// konstanter
const name = "Erik 3";

console.log(name);

// varning.
if ("12" === 12) {
  console.log("de är lika");
} else {
  console.log("de är olika");
}
let variabel = false;
console.log(variabel);
let a = 10;
let result = a + parseInt("3");
console.log(result);
if (!variabel) {
  console.log("dden är false");
}
console.log(false || true);

function enFunktion() {
  console.log("inne i funktionen");
}
enFunktion();
/*
sju värden som räknas som falska
false
0
-0
0n        // BigInt noll
""        // tom sträng
null
undefined
NaN
*/
