// Render a default chess board

let firstRank = document.querySelectorAll('.one .col-1')
let secondRank = document.querySelectorAll('.two .col-1')
let eighthRank = document.querySelectorAll('.eight .col-1')
let seventhRank = document.querySelectorAll('.seven .col-1')

// Put white pieces on first and second ranks
renderSecondRank(secondRank)
renderFirstRank(firstRank)
// Put black pieces on eighth and seventh ranks
renderEighthRank(eighthRank)
renderSeventhRank(seventhRank)

function renderSecondRank(array) {
  array.forEach(function(element) {
    let whitePawn = document.createElement('div')
    whitePawn.classList.add('white', 'pawn')
    let whitePawnIcon = document.createElement('img')
    whitePawnIcon.src = "resources/white_pawn.png"
    whitePawn.append(whitePawnIcon)
    element.append(whitePawn)
  })
}

function renderSeventhRank(array) {
  array.forEach(function(element) {
    let blackPawn = document.createElement('div')
    blackPawn.classList.add('black', 'pawn')
    let blackPawnIcon = document.createElement('img')
    blackPawnIcon.src = "resources/black_pawn.png"
    blackPawn.append(blackPawnIcon)
    element.append(blackPawn)
  })
}

function renderFirstRank(array) {
  function recursiveLoop(array, i) {
    if (i === undefined) i = 0
    if (i === 0) {
      let whiteRook = document.createElement('div')
      whiteRook.classList.add('white', 'rook')
      let whiteRookIcon = document.createElement('img')
      whiteRookIcon.src = 'resources/white_rook.png'
      whiteRook.append(whiteRookIcon)
      array[i].append(whiteRook)
    }
    if (i === 7) {
      let whiteRook = document.createElement('div')
      whiteRook.classList.add('white', 'rook')
      let whiteRookIcon = document.createElement('img')
      whiteRookIcon.src = 'resources/white_rook.png'
      whiteRook.append(whiteRookIcon)
      array[i].append(whiteRook)
    }
    if (i === 1) {
      let whiteKnight = document.createElement('div')
      whiteKnight.classList.add('white', 'knight')
      let whiteKnightIcon = document.createElement('img')
      whiteKnightIcon.src = 'resources/white_knight.png'
      whiteKnight.append(whiteKnightIcon)
      array[i].append(whiteKnight)
    }
    if (i === 6) {
      let whiteKnight = document.createElement('div')
      whiteKnight.classList.add('white', 'knight')
      let whiteKnightIcon = document.createElement('img')
      whiteKnightIcon.src = 'resources/white_knight.png'
      whiteKnight.append(whiteKnightIcon)
      array[i].append(whiteKnight)
    }
    if (i === 2) {
      let whiteBishop = document.createElement('div')
      whiteBishop.classList.add('white', 'bishop')
      let whiteBishopIcon = document.createElement('img')
      whiteBishopIcon.src = 'resources/white_bishop.png'
      whiteBishop.append(whiteBishopIcon)
      array[i].append(whiteBishop)
    }
    if (i === 5) {
      let whiteBishop = document.createElement('div')
      whiteBishop.classList.add('white', 'bishop')
      let whiteBishopIcon = document.createElement('img')
      whiteBishopIcon.src = 'resources/white_bishop.png'
      whiteBishop.append(whiteBishopIcon)
      array[i].append(whiteBishop)
    }
    if (i === 3) {
      let whiteQueen = document.createElement('div')
      whiteQueen.classList.add('white', 'queen')
      let whiteQueenIcon = document.createElement('img')
      whiteQueenIcon.src = 'resources/white_queen.png'
      whiteQueen.append(whiteQueenIcon)
      array[i].append(whiteQueen)
    }
    if (i === 4) {
      let whiteKing = document.createElement('div')
      whiteKing.classList.add('white', 'king')
      let whiteKingIcon = document.createElement('img')
      whiteKingIcon.src = 'resources/white_king.png'
      whiteKing.append(whiteKingIcon)
      array[i].append(whiteKing)
    }
    if (i < array.length - 1) recursiveLoop(array, i + 1)
  }
  return recursiveLoop(array)
}

function renderEighthRank(array) {
  function recursiveLoop(array, i) {
    if (i === undefined) i = 0
    if (i === 0) {
      let blackRook = document.createElement('div')
      blackRook.classList.add('black', 'rook')
      let blackRookIcon = document.createElement('img')
      blackRookIcon.src = 'resources/black_rook.png'
      blackRook.append(blackRookIcon)
      array[i].append(blackRook)
    }
    if (i === 7) {
      let blackRook = document.createElement('div')
      blackRook.classList.add('black', 'rook')
      let blackRookIcon = document.createElement('img')
      blackRookIcon.src = 'resources/black_rook.png'
      blackRook.append(blackRookIcon)
      array[i].append(blackRook)
    }
    if (i === 1) {
      let blackKnight = document.createElement('div')
      blackKnight.classList.add('black', 'knight')
      let blackKnightIcon = document.createElement('img')
      blackKnightIcon.src = 'resources/black_knight.png'
      blackKnight.append(blackKnightIcon)
      array[i].append(blackKnight)
    }
    if (i === 6) {
      let blackKnight = document.createElement('div')
      blackKnight.classList.add('black', 'knight')
      let blackKnightIcon = document.createElement('img')
      blackKnightIcon.src = 'resources/black_knight.png'
      blackKnight.append(blackKnightIcon)
      array[i].append(blackKnight)
    }
    if (i === 2) {
      let blackBishop = document.createElement('div')
      blackBishop.classList.add('black', 'bishop')
      let blackBishopIcon = document.createElement('img')
      blackBishopIcon.src = 'resources/black_bishop.png'
      blackBishop.append(blackBishopIcon)
      array[i].append(blackBishop)
    }
    if (i === 5) {
      let blackBishop = document.createElement('div')
      blackBishop.classList.add('black', 'bishop')
      let blackBishopIcon = document.createElement('img')
      blackBishopIcon.src = 'resources/black_bishop.png'
      blackBishop.append(blackBishopIcon)
      array[i].append(blackBishop)
    }
    if (i === 3) {
      let blackQueen = document.createElement('div')
      blackQueen.classList.add('black', 'queen')
      let blackQueenIcon = document.createElement('img')
      blackQueenIcon.src = 'resources/black_queen.png'
      blackQueen.append(blackQueenIcon)
      array[i].append(blackQueen)
    }
    if (i === 4) {
      let blackKing = document.createElement('div')
      blackKing.classList.add('black', 'king')
      let blackKingIcon = document.createElement('img')
      blackKingIcon.src = 'resources/black_king.png'
      blackKing.append(blackKingIcon)
      array[i].append(blackKing)
    }
    if (i < array.length - 1) recursiveLoop(array, i + 1)
  }
  return recursiveLoop(array)
}
