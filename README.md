# Midterm Problems

[![Tests](https://github.com/RickRieger/midterm-problems/actions/workflows/tests.yml/badge.svg)](https://github.com/RickRieger/midterm-problems/actions/workflows/tests.yml)

**No live site.** This is a set of functions checked by Jest tests, not a web page. The badge above shows the latest test run on GitHub Actions; click it to see the results.

This was my **midterm** at the **Code Immersives** bootcamp in New York City in **March 2021**. It's 14 small functions, done without looking anything up. The last few are meant to be built out of the earlier ones. My code is in [`main.js`](main.js). The instructor's original instructions are kept unchanged under [Original assignment](#original-assignment-from-the-instructor) below.

## Who wrote what

I want to be upfront about this. After the midterm, the instructor walked through solutions in a review lecture, and I copied several of them into `main.js` (commit "Updated after Alex's Lecture"). Each function in `main.js` is labeled:

| Function | Written by |
| --- | --- |
| `isEvenlyDivisible`, `halfSquare`, `isLong`, `countWords`, `containsDigit`, `containsSpace`, `digits`, `truncate` | **me**, during the midterm |
| `exclaim`, `containsLowerCase`, `containsUpperCase`, `containsNonAlphanumeric`, `isValidPassword`, `onlyPunchy` | **the instructor**, from the review lecture |

### How my midterm went

My midterm commit was titled "I Tried". Running today's tests against that commit, **43 of the 54 tests pass**:

- **Passed:** everything through `containsSpace`, plus `digits` and `truncate`.
- **Missed:** `containsNonAlphanumeric` was still commented out (6 tests). `isValidPassword` depends on it, so its "valid password" test failed too (1 test). `onlyPunchy` was an empty function (4 tests).
- **Passed the tests but had a bug:** my `exclaim` counted every `!` in the string, not just the ones at the end. So `'Hi! there'` came back unchanged with no `!` added, and `'Hi! there!!'` lost the `!` in the middle (`'Hi there!'`). The tests only used `!`s at the end, so they didn't catch it. The instructor's version only looks at the end of the string, which is why I switched to it.

About ten days later I came back and rewrote two of the one-line functions as arrow functions (`const halfSquare = (num) => (num * num) / 2;`).

## What it practices

- **Return the comparison itself.** `return str.length >= 15;` instead of `if (...) { return true } else { return false }`.
- **Loop through a string, and stop early.** The `contains...` functions return `true` as soon as they find a match.
- **Building blocks.** The last problems reuse the earlier ones. `containsNonAlphanumeric` asks `containsDigit`, `containsUpperCase` and `containsLowerCase` about one character at a time. `isValidPassword` is just five of the checks joined with `&&`. `onlyPunchy` runs `exclaim` on each title, then keeps the short ones.

## Run the tests

```bash
npm ci
npm run test:ci   # runs once and exits (expected: Tests: 56 passed, 56 total)
npm test          # the instructor's watch mode: re-runs on every save, press q to quit
```

## How it's checked

- [`main.test.js`](main.test.js) is the instructor's original test file, unchanged (54 tests).
- [`cleanup.test.js`](cleanup.test.js) has 2 tests I added in 2026 for `countWords` edge cases.
- **GitHub Actions** ([`.github/workflows/tests.yml`](.github/workflows/tests.yml)) runs both on Node 20 on every push and pull request. The badge at the top shows the result.

## Cleanup log

### 2026-11-25

**1. `countWords` counted spaces, not words**

*Why:* it started at 1 and added 1 for every space. An empty string came out as **1** word, and `'hello  world'` (two spaces) as **3**. The instructor's tests only used single spaces between words, so they passed. Now it counts where words *start*: a non-space character at the beginning or right after a space. The new tests fail on the old code.

Before:

```js
function countWords(str) {
  let wordsCount = 1
  for (const char of str){
    if(char === ' ')
    wordsCount += 1
  }
  return wordsCount
}
```

After:

```js
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
```

**2. Two undeclared variables were leaking out as globals**

*Why:* `truncate` looped with `for (i=0; ...)` and `containsSpace` wrote `doesContainSpace = false`, both without `let`. In plain (non-strict) JavaScript that silently creates a **global** variable shared by the whole program. Added `let`.

```js
for (i=0;i<=7;i++){          // before
for (let i = 0; i <= 7; i++){ // after
```

**3. Removed the dead code and labeled each function**

*Why:* after the lecture, `main.js` was about 600 lines. It held my attempts and the instructor's solutions side by side, mostly as commented-out blocks, plus an unused `onlyPunchyAlternate`. A separate `sandBox.js` held nearly 300 more lines of drafts. I removed all of that, since this README now tells the story instead. Each remaining function is labeled "mine" or "from the instructor's review lecture", matching the table above.

I also simplified a few things for readability. The old and new versions give the same result on 252 test calls.

- `isLong` returns the comparison directly:

  ```js
  // before
  function isLong(str) {
    if (str.length >= 15){
      return true
    }
    else {
      return false
    }
  }
  // after
  const isLong = (str) => str.length >= 15;
  ```

- `truncate` had two identical branches (`> 15` and `=== 15`). Now it's one check:

  ```js
  // before
  if (str.length > 15){
    for (i=0;i<=7;i++){ newStr += `${str[i]}` }
  }
  else if (str.length === 15){
    for (i=0;i<=7;i++){ newStr += `${str[i]}` }
  }
  else if(str.length < 15){
    return str
  }
  // after
  if (str.length < 15) {
    return str;
  }
  for (let i = 0; i < 8; i++) {
    newStr += str[i];
  }
  ```

- The `contains...` functions return `true` as soon as they find a match, instead of counting every match and checking the count at the end.
- `lowerCaseDigits` and `upperCaseDigits` were really lists of letters, so they're now called `lowerCaseLetters` and `upperCaseLetters`.

**4. Updated Jest and added GitHub Actions**

*Why:* the repo used Jest 24 from 2019. `npm audit` on its lock file reports **67 known vulnerabilities (11 critical)** in old sub-dependencies, which is why Dependabot had opened update branches. Jest 29 brings that to **0**. I also added `test:ci` (the instructor's `npm test` is watch mode and never exits) and the Actions workflow behind the badge.

```json
"devDependencies": { "jest": "^24.9.0" }   // before
"devDependencies": { "jest": "29.7.0" }    // after
```

**5. This README**

*Why:* to explain who wrote what, how the midterm went, and the fixes. The instructor's text below is unchanged.

---

## Original assignment (from the instructor)

### Midterm Problems

### Setup

1. Fork the repo.
2. Clone it down.
3. Run `npm install`.
4. Run `npm test`, preferably in a fullscreened terminal window.


### Guidelines

1. Look in `main.js`. Each function has been started for you, but has no code or parameters. Your job is to finish them according to the tests in `main.test.js`.
2. Read those test cases carefully.
3. Do not edit the test file. All your work can and should be done within `main.js`.
4. You may not look at outside sources of any kind. Please feel free to ask for clarifications, though!
5. The last three problems can be solved by using a function or multiple functions that you've written for previous problems, making solving these in order helpful.
6. However, they can sill be tackled in any order. Don't get stuck on any one problem for too long if you're not making progress.
7. Good luck!