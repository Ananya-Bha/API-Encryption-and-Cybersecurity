//  Challenge 1
// Read the number into a box, then write that box on the keypad.
moveRight(1)
const number = readNumber()
moveRight(1)
moveUp(1)
writeCode(number)
moveDown(1)
moveRight(2)

//Challenge 2
// Read the number. At the keypad, hand it to addThree and write the answer.
moveRight(2)
const number = readNumber()
moveRight(2)
moveUp(1)
const answer = addThree(number)
writeCode(answer)
moveDown(1)
moveRight(2)

function addThree(number) {
  const answer = number + 3;
  return answer;
}

//Challenge 3
// Read the number. At the keypad, hand it to your function and write the answer.
moveRight(2)
const number = readNumber()
const answer = add10(number)
moveRight(2)
moveUp(1)
writeCode(answer)
moveDown(1)
moveRight(2)

function add10(number){
  const answer = number +10
  return answer
}

//Challenge 4
moveRight(2);
const number = readNumber();
moveRight(2);
moveUp(1);
const answer = addFive(number);
writeCode(answer);
moveDown(1);
moveRight(2);

function addFive(number) {
  const answer = number + 5;
  return answer
}

//Challenge 5
// Read the letter. At the keypad, turn it into a number and write that.
moveRight(2)
const letter = readText()
const number = letterToNumber(letter)
moveRight(2)
moveUp(1)
writeCode(number)
moveDown(1)
moveRight(2)

//Challenge 6
// Read the number. At the keypad, turn it into a letter and write that.
moveRight(2)
const number = readNumber()
const letter = numberToLetter(number)
moveRight(2)
moveDown(1)
writeCode(letter)
moveUp(1)
moveRight(2)

//Challenge 7
// Read the letter. At the keypad, hand it to your function and write the secret.
moveRight(2)
const letter = readText()
const letter2 = encryptLetter(letter)
moveRight(2)
moveUp(1)
writeCode(letter2)
moveDown(1)
moveRight(2)

function encryptLetter(letter) {
  const number = letterToNumber(letter) +3
  const letter2 = numberToLetter(number)
  return letter2
}

//Challenge 8
moveRight(1)
const letter = readText()
moveRight(2)
const shift = readNumber()
const letter2 = encryptLetter(letter,shift)
moveRight(2)
moveUp(1)
writeCode(letter2)
moveDown(1)
moveRight(2)

function encryptLetter(letter, shift) {
  const number = letterToNumber(letter) + shift
  const letter2 = numberToLetter(number)
  return letter2
}

//Challenge 9
moveRight(1)
const letter = readText()
const shift1 = encryptLetter(letter,2)
const shift2 = encryptLetter(letter,5)
moveRight(2)
moveUp(1)
writeCode(shift1)
moveDown(1)
moveRight(3)
moveUp(1)
writeCode(shift2)
moveDown(1)
moveRight(2)

function encryptLetter(letter, shift) {
  const number = letterToNumber(letter) + shift
  const letter2 = numberToLetter(number)
  return letter2
}

//Challenge 10
moveRight(1)
const letter = readText()
moveRight(2)
const part1 = readNumber()
moveRight(2)
const part2 = readNumber()
const shift = part1+part2
const letter2 = encryptLetter(letter,shift)
moveRight(1)
moveUp(1)
writeCode(letter2)
moveDown(1)
moveRight(2)

function encryptLetter(letter, shift) {
  const number = letterToNumber(letter) + shift
  const letter2 = numberToLetter(number)
  return letter2

}



