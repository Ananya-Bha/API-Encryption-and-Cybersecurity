//Challenge 1
moveRight(4);
moveUp(2);

//Challenge 2
moveUp(1);
let pathway = readCode()

if (pathway==="A"){goToZoneA()}
if (pathway==="B"){goToZoneB()}

function goToZoneA() {
  moveUp(1);
  moveLeft(2);
}

function goToZoneB() {
  moveUp(1);
  moveRight(2);
}

//Challenge 3

// 1. Stand on the note and read it.
moveRight(2);
let code = readCode()
moveRight(2);
moveUp(1);
// 2. Take the code to the keypad and write it.
writeCode(code)
moveDown(1);
moveRight(2);

//Challenge 4
moveUp(1);
let direction = readCode()
if (direction==="A"){goToZoneA()}
if (direction==="B"){goToZoneB()}

function goToZoneA() {
  moveUp(1);
  moveLeft(2);
  moveUp(2);
  moveLeft(1);
}

function goToZoneB() {
  moveUp(1);
  moveRight(2);
  moveUp(1);
  moveRight(1);
}

//Challenge 5
moveRight(1);
let code = readCode()
moveRight(2);
moveUp(1);
writeCode(code);
moveDown(1);
moveRight(2);
let direction = readCode();
if (direction==="A"){goToZoneA()}
if (direction==="B"){goToZoneB()}

function goToZoneA() {
  moveUp(2);
}

function goToZoneB() {
  moveDown(2);
}

//Challenge 6
moveRight(2);
let encrypted = readCode();
moveRight(2);
moveUp(1);
let decrypted = shiftLetters(encrypted,1)
writeCode(decrypted);
moveDown(1);
moveRight(2)

//Challenge 7
moveRight(2);
moveUp(2);
let part1 = readCode()
moveDown(2);
moveRight(2);
moveUp(2);
let part2 = readCode()
moveDown(2);
moveRight(2);
moveUp(1);
writeCode(part1+part2);
moveDown(1);
moveRight(2);

//Challenge 8
moveRight(1);
let code = readCode()
moveRight(2);
moveUp(1);
let shift1 = shiftLetters(code,1)
writeCode(shift1);
moveDown(1)
moveRight(3);
moveUp(1);
let shift2 = shiftLetters(shift1,1)
writeCode(shift2)
moveDown(1)
moveRight(2)

//Challenge 9
moveRight(1);
let encrypted = readCode()
moveRight(1);
let shift = readCode()
moveUp(1)
let decrypted = shiftLetters(encrypted, shift)
writeCode(decrypted)
moveDown(1)
moveRight(2)
let direction = readCode()
moveRight(2)
if (direction==="A"){goToZoneA()}
if (direction==="B"){goToZoneB()}

function goToZoneA(){
  moveUp(2);
  moveLeft(3)
}
function goToZoneB(){
  moveDown(2);
  moveLeft(3)
}

//Challenge 10
moveRight(1)
let code1 = readCode()
moveRight(1)
let shift1 = readCode()
moveRight(1)
moveUp(1)
let decrypted1 = shiftLetters(code1,shift1)
writeCode(decrypted1);
moveDown(1);
moveRight(2);
let code2 = readCode()
moveRight(1)
let shift2 = readCode()
moveRight(1)
moveUp(1)
let decrypted2 = shiftLetters(code2,shift2)
writeCode(decrypted2);
let direction = readCode();
moveDown(1)
moveRight(2);
if (direction==="A"){goA()}
if (direction==="B"){goB()}

function goA(){
  moveUp(2);
}
function goB(){
  moveDown(2);
}

