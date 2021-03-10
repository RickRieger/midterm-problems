
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




// function exclaim(str) {
//   let newStr = ''
//   let numOfexplinationMarks = 0
//   for (const char of str){
//     if(char === '!'){
//       numOfexplinationMarks += 1
//     }
//   }
//   if(numOfexplinationMarks === 0){
//     for(const char of str){
//       newStr += char
//     }
//     return newStr += '!'
//   }
//   else if (numOfexplinationMarks === 1){
//     return str
//   }
//   else if (numOfexplinationMarks > 1){
//     for(const char of str){
//       if(char !== '!'){
//         newStr += char
//       }
      
//     }
//   }
//   return newStr += '!'
// }





//AlexCrist Solution
function exclaim(str) {

  // Count the number of exclamation marks that the string ends with (count start at end of string)
  let numExclamationMarks = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '!') {
      numExclamationMarks++;
    } else {
      break;
    }
  }

  // Get the part of the string that does not contain the exclamation marks (ie.: 'hello!!!' => 'hello')
  let exclamationlessStr = '';
  for (let i = 0; i < str.length - numExclamationMarks; i++) {
    exclamationlessStr += str[i];
  }

  // Add one exclamation mark to the end
  // (i.e.: 'hello' => 'hello!')
  return exclamationlessStr + '!';
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
    char === '9'||
    char === '0'){
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

// //AlexCrist
// function containsDigit(str) {
//   let doesContainDigits = false;

//   // Look at every character, and see if any of them are digits
//   for (const char of str) {
//     if (
//       char === '0' ||
//       char === '1' ||
//       char === '2' ||
//       char === '3' ||
//       char === '4' ||
//       char === '5' ||
//       char === '6' ||
//       char === '7' ||
//       char === '8' ||
//       char === '9'
//     ) {
//       doesContainDigits = true;
//     }
//   }

//   return doesContainDigits;
// }

////my feeble attempt
// function containsLowerCase(str) {
//   let numSymCount = 0
//   let upperCount = 0
//   let lowerCount = 0
//   for(const char of str){
//     if (char.toLowerCase() === char.toUpperCase()){
//       numSymCount += 1
//     }
    
//     else if(char !== char.toLowerCase()){
//       upperCount += 1
//     }
     
//     else if(char !== char.toUpperCase()){
//       lowerCount += 1
//     }
//   }
//   if(upperCount === str.length || numSymCount === str.length){
//     return false;
//   }
//   else{
//     return true;
//   }
// }





//AlexCrist
function containsLowerCase(str) {
  let doesContainLowerCase = false;

  const lowerCaseDigits = 'abcdefghijklmnopqrstuvwxyz';

  for (const char of str) {
    if (lowerCaseDigits.includes(char)) {
      doesContainLowerCase = true;
    }
  }

  return doesContainLowerCase;
}




// //INTERESTING SOLUTION by AlexCrist
// function containsLowerCase(str) {

//   let doesContainLowerCase = false;

//   for (const char of str) {

//     // 1. Is the char a letter?
//     const isLetter = char.toLowerCase() !== char.toUpperCase();

//     // 2. If so, is the lowercased version of that char equal to the original char
//     const isLowerCase = char === char.toLowerCase();
    
//     // If 1. and 2. are both true, char is a lower case letter
//     if (isLetter && isLowerCase) {
//       doesContainLowerCase = true;
//     }
//   }

//   return doesContainLowerCase;

// }



//===================================================



////my feeble attempt
// function containsUpperCase(str) {
//   let numSymCount = 0
//   let upperCount = 0
//   let lowerCount = 0
//   for(const char of str){
//     if (char.toLowerCase() === char.toUpperCase()){
//       numSymCount += 1
//     }
//     else if(char !== char.toLowerCase()){
//       upperCount += 1
//     }
//     else if(char !== char.toUpperCase()){
//       lowerCount += 1
//     }
//   }
//   if(lowerCount === str.length || numSymCount === str.length ){
//     return false;
//   }
//   else{
//     return true;
//   }
// }

//AlexCrist
function containsUpperCase(str) {
  let doesContainUpperCase = false;

  const upperCaseDigits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (const char of str) {
    if (upperCaseDigits.includes(char)) {
      doesContainUpperCase = true;
    }
  }

  return doesContainUpperCase;
}



//=========================================================




// function containsNonAlphanumeric(str) {
//   let numSymCount = 0
//   let upperCount = 0
//   let lowerCount = 0
//   for(const char of str){
//     if (char.toLowerCase() === char.toUpperCase()){
//       numSymCount += 1
//     }
//     else if (parseInt(char) === str.length()){
//       return false
//     }
//     else if(numSymCount > 0){
//       return true;
//     }
//     else{
//       return false;
//     }
//   }
// }


function containsNonAlphanumeric(str) {
  let doesContainNonAlphanumeric = false;

  for (const char of str) {
    const isDigit = containsDigit(char);
    const isUpperCaseLetter = containsUpperCase(char);
    const isLowerCaseLetter = containsLowerCase(char);
    const isAlphanumeric = (
      isDigit || 
      isUpperCaseLetter || 
      isLowerCaseLetter
    );
    if (!isAlphanumeric) {
      doesContainNonAlphanumeric = true;
    }
  }

  return doesContainNonAlphanumeric;
}


//=====================================================




// function containsSpace(str) {
//   let spaceCount = 0
//   for (const char of str){
//     if (char === ' '){
//       spaceCount += 1
//     }
//   }
//   if (spaceCount > 0){
//     return true
//   }
//   else{
//     return false
//   }
// }

function containsSpace(str){
  doesContainSpace = false
  if (str === ''){
    return doesContainSpace
  }
  for (const char of str){
    if (char === ' '){
      doesContainSpace = true
    }
  }
  return doesContainSpace
}




//=====================================================





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
// function digits(num) {
//   let newStr = num.toString()
//   let result = []
//   for (const char of newStr){
//     if(char !== '-' && char !== '.'){
//       result.push(parseInt(char))
//     }
//   }
//   return result
// }




//=============================================================





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

////AlexCrist solution
// function truncate(str) {
//   // If string is less than 15 characters, return it unchanged
//   if (str.length < 15) {
//     return str;
//   }

//   // If equal to or longer than 15 chars, truncate it to the first 8 characters + '...'
//   else {
//     let output = '';
//     for (let i = 0; i < 8; i++) {
//       output += str[i];
//     }
//     output += '...';
//     return output;
//   }
// }

//===========================================================================================






////my feeble attempt
// function isValidPassword(str) {
//   let lowerCount = 0
//   let upperCount = 0
//   let numCount = 0
//   let specCharCount = 0
//   let spaceCount = 0
//   for (const char in str) {
//     if (!isNaN(parseInt(str[char]))) {
//       numCount++;
//     }
//     else if (char !== char.toUpperCase()){
//       lowerCount++;
//     }
//     else if (char !== char.toLowerCase()){
//       upperCount++;
//     }
//     else if (char.toUpperCase() === char.toLowerCase() && !isNaN(parseInt(str[char]))){
//       specCharCount++;
//     }
//     else if (char === ' '){
//       spaceCount++;
//     }
//   }
//     if (numCount>0 && lowerCount>0 && upperCount>0 && specCharCount>0){
//       return true
//     }
//     else {
//       return false
//     } 
// }

// Valid passwords have:
// * at least one upper case char
// * at least one lower case char
// * at least one digit
// * at least one non-alphanumeric char
// * no spaces


//AlexCrist solution

// function isValidPassword(str) {
//   const doesContainUpperCase = containsUpperCase(str);
//   const doesContainLowerCase = containsLowerCase(str);
//   const doesContainDigit = containsDigit(str);
//   const doesContainNonAlphanumeric = containsNonAlphanumeric(str);
//   const doesContainSpace = containsSpace(str);
  
//   const isValid = (
//     doesContainUpperCase &&
//     doesContainLowerCase &&
//     doesContainDigit &&
//     doesContainNonAlphanumeric &&
//     !doesContainSpace
//   );

//   return isValid;
// }


//shorter version of the above code

function isValidPassword(str) {
  return (
    containsUpperCase(str) &&
    containsLowerCase(str) &&
    containsDigit(str) &&
    containsNonAlphanumeric(str) &&
    !containsSpace(str)
  );
}





//==========================================================






function onlyPunchy(titles) {

  // Apply the `exclaim` function to each item in the input array
  let exclaimedTitles = [];
  for (const title of titles) {
    const exclaimedTitle = exclaim(title);
    exclaimedTitles.push(exclaimedTitle);
  }

  // Filter out any titles that are >= 15 chars
  let punchyTitles = [];
  for (const title of exclaimedTitles) {
    if (title.length < 15) {
      punchyTitles.push(title); 
    }
  }

  return punchyTitles;
}

// .map, .filter version



function onlyPunchyAlternate(titles) {
  const exclaimedTitles = titles.map(exclaim);
  const punchyTitles = exclaimedTitles.filter(
  (title) => title.length < 15
  );
  return punchyTitles;
}




//======================================================================





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