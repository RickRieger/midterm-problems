// Midterm problems (Code Immersives, March 2021)
//
// Who wrote what: functions marked "Mine" are my own midterm answers.
// Functions marked "From the instructor's review lecture" are the
// instructor's solutions, which I copied in after the lecture
// (my first attempts at those are described in the README).

//==================== isEvenlyDivisible (mine) ====================

const isEvenlyDivisible = (num1, num2) => num1 % num2 === 0;

//==================== halfSquare (mine) ====================

const halfSquare = (num) => (num * num) / 2;

//==================== isLong (mine) ====================

const isLong = (str) => str.length >= 15;

//==================== exclaim (from the instructor's review lecture) ====================

// Ends the string with exactly one '!'. Only the exclamation marks at the END
// are touched: 'Hi! there!!' becomes 'Hi! there!'.
function exclaim(str) {
  // Count the exclamation marks the string ends with (start at the end and walk back)
  let numExclamationMarks = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '!') {
      numExclamationMarks++;
    } else {
      break;
    }
  }

  // Copy everything before those exclamation marks ('hello!!!' => 'hello')
  let exclamationlessStr = '';
  for (let i = 0; i < str.length - numExclamationMarks; i++) {
    exclamationlessStr += str[i];
  }

  // Add exactly one back ('hello' => 'hello!')
  return exclamationlessStr + '!';
}

//==================== countWords (mine) ====================

// Count where words START (a non-space at the beginning or right after a space),
// so an empty string is 0 words and extra spaces don't add phantom words.
function countWords(str) {
  let wordsCount = 0;
  let inWord = false;
  for (const char of str) {
    if (char === ' ') {
      inWord = false;
    } else if (!inWord) {
      wordsCount++;
      inWord = true;
    }
  }
  return wordsCount;
}

//==================== containsDigit (mine) ====================

function containsDigit(str) {
  const digitChars = '0123456789';
  for (const char of str) {
    if (digitChars.includes(char)) {
      return true; // one is enough, no need to keep looking
    }
  }
  return false;
}

//==================== containsLowerCase (from the instructor's review lecture) ====================

function containsLowerCase(str) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  for (const char of str) {
    if (lowerCaseLetters.includes(char)) {
      return true;
    }
  }
  return false;
}

//==================== containsUpperCase (from the instructor's review lecture) ====================

function containsUpperCase(str) {
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (const char of str) {
    if (upperCaseLetters.includes(char)) {
      return true;
    }
  }
  return false;
}

//==================== containsNonAlphanumeric (from the instructor's review lecture) ====================

// Reuses the three functions above on one character at a time.
function containsNonAlphanumeric(str) {
  for (const char of str) {
    const isAlphanumeric = containsDigit(char) || containsUpperCase(char) || containsLowerCase(char);
    if (!isAlphanumeric) {
      return true;
    }
  }
  return false;
}

//==================== containsSpace (mine) ====================

function containsSpace(str) {
  for (const char of str) {
    if (char === ' ') {
      return true;
    }
  }
  return false;
}

//==================== digits (mine) ====================

// 12.5 => '12.5' => [1, 2, 5]: skip the minus sign and the decimal point.
function digits(num) {
  const result = [];
  for (const char of num.toString()) {
    if (char !== '-' && char !== '.') {
      result.push(parseInt(char));
    }
  }
  return result;
}

//==================== truncate (mine) ====================

// 15 characters or more: keep the first 8 and add '...'.
function truncate(str) {
  if (str.length < 15) {
    return str;
  }
  let newStr = '';
  for (let i = 0; i < 8; i++) {
    newStr += str[i];
  }
  return newStr + '...';
}

//==================== isValidPassword (from the instructor's review lecture) ====================

// Valid passwords have at least one upper case letter, one lower case letter,
// one digit and one non-alphanumeric character, and no spaces.
// Each rule is one of the functions above.
function isValidPassword(str) {
  return (
    containsUpperCase(str) &&
    containsLowerCase(str) &&
    containsDigit(str) &&
    containsNonAlphanumeric(str) &&
    !containsSpace(str)
  );
}

//==================== onlyPunchy (from the instructor's review lecture) ====================

// exclaim every title, then keep the ones under 15 characters.
// (With array methods this is: titles.map(exclaim).filter((title) => title.length < 15))
function onlyPunchy(titles) {
  const exclaimedTitles = [];
  for (const title of titles) {
    exclaimedTitles.push(exclaim(title));
  }

  const punchyTitles = [];
  for (const title of exclaimedTitles) {
    if (title.length < 15) {
      punchyTitles.push(title);
    }
  }
  return punchyTitles;
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
};
