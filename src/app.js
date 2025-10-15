console.log("allt fungerar");

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
