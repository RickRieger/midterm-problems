// function exclaim(str) {
//     let newStr = ''
//     let numOfexplinationMarks = 0
//     for (const char of str){
//         if(char === '!'){
//             numOfexplinationMarks += 1
//         }
//     }
//     if(numOfexplinationMarks === 0){
//         for(const char of str){
//             newStr += char
//         }
//         return newStr += '!'
//     }
//     else if (numOfexplinationMarks === 1){
//         return str
//     }
//     else if (numOfexplinationMarks > 1){
//         for(const char of str){
//                 if(char !== '!'){
//                 newStr += char
//             }

//         }
//     }
//     return newStr += '!'
// }

//  let a = exclaim ('Hello my name is Rick')
//  let b = exclaim ('Hello my name is Rick!')
//  let c = exclaim ('Hello my name is Rick!!!')

//  console.log(); 

// function countWords(str) {
//     let wordsCount = 1
//     for (const char of str){
//     if(char === ' ')
//     wordsCount += 1
//     }
//     return wordsCount
//   }

//   let x = countWords('hello I am busy')
//   x

// function containsDigit(str){
//     let count = 0
//      for (const char of str){
//        if (char === '1'||
//            char === '2'||
//            char === '3'||
//            char === '4'||
//            char === '5'||
//            char === '6'||
//            char === '7'||
//            char === '8'||
//            char === '9'){
//            {
//            count += 1
//            }
//         } 
//    }
//    if(count > 0){
//     return true
//   }
//   else{
//     return false
//   }
//  }

//  let x = containsDigit('a231')
//  x

// function containsLowerCase(str) {
//     let numSymCount = 0
//     let upperCount = 0
//     let lowerCount = 0
//     for(const char of str){
//       if (char.toLowerCase() === char.toUpperCase()){
//   }
//     if(upperCount === str.length || numSymCount === str.length){
//       return false;
//     }
//     else{
//       return true;
//     }
//   let x = containsLowerCase('')         numSymCount += 1
//         }

//   else if(char === char.toUpperCase()){
//     upperCount += 1
//   }

//   else if(char === char.toLowerCase()){
//     lowerCount += 1
//   }

//   let x = containsLowerCase(' ')
//   let x = containsLowerCase(' ')
//   let x = containsLowerCase(' ')
//   let x = containsLowerCase(' ')
//   let x = containsLowerCase(' ')
//   let x = containsLowerCase(' ')

//   function letsSee(str){
//       let num = 0
//       for (const char of str){
//           if (char === /[1-9]/){
//               num += 1
//           }
//       }
//       return num
//   }

//   let x = letsSee('')
//   x

// function digits(nums) {
//     let newStr = nums.toString()
//     let newArray = []
//     let newNum = 0
//     for (const char of newStr){
//         if(char !== '-' && char !== '.'){
//             newNum = parseInt(char)
//             newArray.push(newNum)
//         }
//     }
//     return newArray
// }


// function truncate(str) {
//     let newStr = ''
//     if (str.length > 15){
//       for (i=0;i<=7;i++){
//         newStr += `${str[i]}`
//       }
//     }
//     else if (str.length === 15){
//       for (i=0;i<=7;i++){
//         newStr += `${str[i]}`
//       }
//     }
//     else if(str.length < 15){
//       for (i=0;i< str.length;i++){
//         newStr += `${str[i]}`
//       }
//     }
//   return newStr +
//   }
// let x = truncate(`I'm so tired, my mind is set on you`)
// x

// function containsUpperCase(str) {
//     let numSymCount = 0
//     let upperCount = 0
//     let lowerCount = 0
//     for(const char of str){
//       if (char.toLowerCase() === char.toUpperCase()){
//         numSymCount += 1
//       }
//       else if(char === char.toUpperCase()){
//         upperCount += 1
//       }
//       else if(char === char.toLowerCase()){
//         lowerCount += 1
//       }
//     }
//     // return numSymCount
//     // return upperCount
//     return lowerCount
//  }


//   let x = containsUpperCase('hello there')
//   x



// function isValidPassword(str) {
//     let lowerCount = 0
//     let upperCount = 0
//     let numCount = 0
//     let specCharCount = 0
    // let spaceCount = 0
    
    // for (const char in str) {
    //     if (!isNaN(parseInt(str[char]))) {
    //         numCount++;
    //     }
    // }
    // for (const char in str){
    //     if (char !== char.toUpperCase()){
    //         lowerCount++;
    //     }
    // }
    // for (const char in str){
    //     if (char !== char.toLowerCase()){
    //         upperCount++;
    //     }
    // }
    // for (const char in str){
    //     (char.toUpperCase() === char.toLowerCase() && !isNaN(parseInt(str[char]))){
    //         specCharCount++;
    //     }
    // }
    // for (const char in str){
    //     if (char === ' '){
    //         spaceCount++;
    //       }
    // } 
    //     if (numCount>0 && lowerCount>0 && upperCount>0 && specCharCount>0){
    //         // return true
    //     }
    //     else {
    //         // return false
    //     } 
    
    //     return lowerCount
    //     return upperCount
    //     return spaceCount
    //     return specCharCount
    // }
    // let x = isValidPassword('ddddd')
    // x

    // function test(str){
    
    // let lowerCount = 0
    // let upperCount = 0
    // let numCount = 0
    // let specCharCount = 0
    // let spaceCount = 0
    
    // for (const char in str) {
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
    //       return lowerCount
    //     } 
    // }

    // let x = test('CCC')
    // x 
    
    // let char = 'a'
    // let char2 = char.toUpperCase() !== char
    // char2
    

    function maxDiff(list) {
        let max = Math.max(...list);
        let min = Math.min(...list);
        let diffBetween = 0;
        diffBetween = max - min;
        
       if(list === []){
           return 0
       }
        else if (list.length <= 1 || list[0] === []){
          return 0;
        }
        
        else{
          return diffBetween
        }
      }

      let x = maxDiff([])
      x

    //   Test.assertEquals(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
    //   Test.assertEquals(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
    //   Test.assertEquals(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
    //   Test.assertEquals(maxDiff([16]), 0);
    //   Test.assertEquals(maxDiff([]), 0);