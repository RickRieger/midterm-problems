
function isEvenlyDivisible(num1, num2) {
  if(num1%num2 === 0){
    return true
  }
  else{
    return false
  }
}
//====================================

function halfSquare(num) {
  let result = 0
  result = (num * num) / 2
  return result
}
//====================================


function isLong(str) {
  if (str.length >= 15){
    return true
  }
  else {
    return false
  }
}
//====================================

function exclaim(str) {
  let newStr = ''
  let numOfexplinationMarks = 0
  for (const char of str){
    if(char === '!'){
      numOfexplinationMarks += 1
    }
  }
  if(numOfexplinationMarks === 0){
    for(const char of str){
      newStr += char
    }
    return newStr += '!'
  }
  else if (numOfexplinationMarks === 1){
    return str
  }
  else if (numOfexplinationMarks > 1){
    for(const char of str){
      if(char !== '!'){
        newStr += char
      }
      
    }
  }
  return newStr += '!'
}

//====================================




function countWords(str) {
  let wordsCount = 1
  for (const char of str){
    if(char === ' ')
    wordsCount += 1
  }
  return wordsCount
}

//====================================



function containsDigit(str){
  let count = 0
  for (const char of str){
    if (char === '1'||
    char === '2'||
    char === '3'||
    char === '4'||
    char === '5'||
    char === '6'||
    char === '7'||
    char === '8'||
    char === '9'){
      count += 1  
    } 
  }
  if(count > 0){
    return true
  }
  else{
    return false
  }
}


function containsLowerCase(str) {
  let numSymCount = 0
  let upperCount = 0
  let lowerCount = 0
  for(const char of str){
    if (char.toLowerCase() === char.toUpperCase()){
      numSymCount += 1
    }
    
    else if(char !== char.toLowerCase()){
      upperCount += 1
    }
    
    else if(char !== char.toUpperCase()){
      lowerCount += 1
    }
  }
  if(upperCount === str.length || numSymCount === str.length){
    return false;
  }
  else{
    return true;
  }
}


function containsUpperCase(str) {
  let numSymCount = 0
  let upperCount = 0
  let lowerCount = 0
  for(const char of str){
    if (char.toLowerCase() === char.toUpperCase()){
      numSymCount += 1
    }
    else if(char !== char.toLowerCase()){
      upperCount += 1
    }
    else if(char !== char.toUpperCase()){
      lowerCount += 1
    }
  }
  if(lowerCount === str.length || numSymCount === str.length ){
    return false;
  }
  else{
    return true;
  }
}

function containsNonAlphanumeric(str) {
  // let numSymCount = 0
  // let upperCount = 0
  // let lowerCount = 0
  // for(const char of str){
  //   if (char.toLowerCase() === char.toUpperCase()){
  //     numSymCount += 1
  //   }
  //   else if (parseInt(char) === str.length()){
  //     return false
  //   }
  //   else if(numSymCount > 0){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }
}
// }

function containsSpace(str) {
  let spaceCount = 0
  for (const char of str){
    if (char === ' '){
      spaceCount += 1
    }
  }
  if (spaceCount > 0){
    return true
  }
  else{
    return false
  }
}

function digits(nums) {
  let newStr = nums.toString()
  let newArray = []
  let newNum = 0
  for (const char of newStr){
    if(char !== '-' && char !== '.'){
      newNum = parseInt(char)
      newArray.push(newNum)
    }
  }
  return newArray
}

function truncate(str) {
  let newStr = ''
  if (str.length > 15){
    for (i=0;i<=7;i++){
      newStr += `${str[i]}`
    }
  }
  else if (str.length === 15){
    for (i=0;i<=7;i++){
      newStr += `${str[i]}`
    }
  }
  else if(str.length < 15){
    return str
  }
  return newStr += '...'
}

function isValidPassword(str) {
  let lowerCount = 0
  let upperCount = 0
  let numCount = 0
  let specCharCount = 0
  let spaceCount = 0
  
  
  for (const char in str) {
    if (!isNaN(parseInt(str[char]))) {
      numCount++;
    }
    else if (char !== char.toUpperCase()){
      lowerCount++;
    }
    else if (char !== char.toLowerCase()){
      upperCount++;
    }
    else if (char.toUpperCase() === char.toLowerCase() && !isNaN(parseInt(str[char]))){
      specCharCount++;
    }
    else if (char === ' '){
      spaceCount++;
    }
  }
    if (numCount>0 && lowerCount>0 && upperCount>0 && specCharCount>0){
      return true
    }
    else {
      return false
    } 
}

function onlyPunchy() {
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}