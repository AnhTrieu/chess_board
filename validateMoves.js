let rankConverstion = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8
}
let fileConverstion = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8
}
console.log(selected[0]);

// function validateBishopMove(start, destination, board) {
//   let legal = []
//
//   (function calculateLegalMoves() {
//
//     (function calculateUpperLeft () {
//       let upperLeft = {}
//       let x = 0
//       let y = 0
//       for (let key in rankConverstion) {
//       (start[0] === key)?y=rankConverstion[key]:''
//       }
//       for (let key in fileConverstion) {
//         (start[1] === key)?x=fileConverstion[key]:''
//       }
//       while(x > 1 && y < 8) {
//         x--
//         y++
//         newX = x
//         newY = y
//         for (let key in fileConverstion) {
//           (newX === fileConverstion[key])?newX=key:''
//         }
//         for (let key in rankConverstion) {
//           (newY === rankConverstion[key])?newY=key:''
//         }
//         upperLeft[newX] = newY
//       }
//       legal[0] = upperLeft
//     })()
//
//     (function calculateUpperRight () {
//       let upperRight = {}
//       let x = 0
//       let y = 0
//       for (let key in rankConverstion) {
//       (start[0] === key)?y=rankConverstion[key]:''
//       }
//       for (let key in fileConverstion) {
//         (start[1] === key)?x=fileConverstion[key]:''
//       }
//       while(x < 8 && y < 8) {
//         x++
//         y++
//         newX = x
//         newY = y
//         for (let key in fileConverstion) {
//           (newX === fileConverstion[key])?newX=key:''
//         }
//         for (let key in rankConverstion) {
//           (newY === rankConverstion[key])?newY=key:''
//         }
//         upperRight[newX] = newY
//       }
//       legal[1] = upperRight
//     })()
//
//     (function calculateLowerRight () {
//       let lowerLeft = {}
//       let x = 0
//       let y = 0
//       for (let key in rankConverstion) {
//       (start[0] === key)?y=rankConverstion[key]:''
//       }
//       for (let key in fileConverstion) {
//         (start[1] === key)?x=fileConverstion[key]:''
//       }
//       while(x < 8 && y > 1) {
//         x++
//         y--
//         newX = x
//         newY = y
//         for (let key in fileConverstion) {
//           (newX === fileConverstion[key])?newX=key:''
//         }
//         for (let key in rankConverstion) {
//           (newY === rankConverstion[key])?newY=key:''
//         }
//         lowerRight[newX] = newY
//       }
//       legal[2] = lowerRight
//     })()
//
//     (function calculateLowerLeft () {
//       let lowerRight = {}
//       let x = 0
//       let y = 0
//       for (let key in rankConverstion) {
//       (start[0] === key)?y=rankConverstion[key]:''
//       }
//       for (let key in fileConverstion) {
//         (start[1] === key)?x=fileConverstion[key]:''
//       }
//       while(x > 1 && y > 1) {
//         x--
//         y--
//         newX = x
//         newY = y
//         for (let key in fileConverstion) {
//           (newX === fileConverstion[key])?newX=key:''
//         }
//         for (let key in rankConverstion) {
//           (newY === rankConverstion[key])?newY=key:''
//         }
//         lowerLeft[newX] = newY
//       }
//       legal[3] = lowerLeft
//     })()
//
//   })()
//
//   let valid = (function() {
//     legal.forEach(function(i) {
//       for (let key in i) {
//         if ((destination.classList.item(1) === key) && (destination.parentNode.classList.item(1) === i.[key])) {
//               return true
//             }
//             else {
//             return false
//           }
//       }
//     })
//   })()
//
// }
