// Finn tekst på nett

let myText =
  " If Mr Petro, 62, wins he will be the first left-wing president in the country's history. As he has promised to fix the country's deep inequalities and switch its reliance on fossil fuels to clean technology ";

console.log(myText.length > 200);

// Loop som teller til 10

for (let myLength = 1; myLength < 11; myLength++) {
  console.log(myLength);
}

//Finn if,as og and. Ja jeg vet dette er feil, men måtte bare ha noe å vise til, og gjennom mye googling
//på mdn og w3 så var dette det beste jeg kom opp med;-)

let myFindIfText = myText;

let resIf = myFindIfText.indexOf("If", 5);
console.log(resIf);

let myFindAsText = myText;

let resAs = myFindAsText.indexOf("As");
console.log(resAs);

let myFindAndText = myText;

let resAnd = myFindAndText.indexOf("and");
console.log(resAnd);

let sliceText = myText;
let resSliceText = sliceText.slice(92, 135);
console.log(resSliceText);

let newText = " he has promised to fix the country";
let result = newText.replace("promised", "NOT promised");
console.log(result);

//game fikk jeg heller ikke helt til. tanken var at den skulle bytte mellom de tre, men den ender alltid opp med paper i tilegg til en annen ;-)
let number = Math.random();
if (number < 0.1) {
  console.log("Rock");
} else if (number > 0.9) {
  console.log("Scissors");
} else number === 0.5;
console.log("Paper");

//lag en array med 10 ord og 10 tall

let myWordArray = [
  "Hei",
  "Hallo",
  "Morn",
  "Hade",
  "Adjø",
  "Farvell",
  "Øl",
  "Beer",
  "Birra",
  "Cerveza",
];
const myNumberArray = [10, 25, 35, 40, 55, 60, 75, 80, 95, 100];

let newNumbers = [];
let length = number.length;

for (let I = 0; I < length; I++) {
  if (myNumberArray.indexOf(number[I]) === -1) myNumberArray.push(number[I]);
}

console.log(myNumberArray);

let myTextAr = myWordArray;
let myNumAr = myNumberArray;
let myTextNum = myTextAr.concat(myNumAr);

console.log(myTextNum);
