let selected = []
let firstClick = true
let board = document.querySelector('.chess-board')
let capturedBlack = document.querySelector('.captured .black .pieces')
let capturedWhite = document.querySelector('.captured .white .pieces')

// Listen for click on elements of .chess-board
board.addEventListener('click', function(e) {
  let target = e.target
  let piece = e.target.parentNode
  let square = e.target.parentNode.parentNode
  // Listen for first click
  if (firstClick) {
    select()
  }
  // Listen for second click
  else {
    // Check if a square is empty
    if (target.tagName !== 'IMG') {
      move()
    }
    // Capture, switch, deselect a piece
    else {
      // Allow capture only if the piece is not your own
      if (piece.classList.item(0) !== playerSwitch.value) {
        capture()
      }
      else {
        // Switch to or deselect a piece
        square !== selected[0].parentNode ? change(): deselect()
      }
    }
  }
  // Select a piece
  function select() {
    if (piece.classList.item(0) === playerSwitch.value) {
      if (target.tagName === 'IMG') {
        // e.target.parentNode.parentNode.style.border = 'solid red'
        selected[0] = piece
        firstClick = false
      }
    }
  }
  // Move a piece
  function move() {
    if (pieceIdentifier(selected[0], target) === true) {
      target.append(selected[0])
      selected.pop()
      firstClick = true
      autoRotate()
    }
  }
  // Deselect a piece
  function deselect() {
    selected.pop()
    firstClick = true
  }
  // Switch to another piece
  function change() {
    selected[0] = piece
  }
  // Capture opponent's piece
  function capture() {
    if (pieceIdentifier(selected[0], square)) {
      square.append(selected[0])
      if (piece.classList.item(0) === capturedBlack.classList.item(2)) {
        target.style.width = '25px'
        target.style.height = '25px'
        capturedBlack.append(piece)
        renderScore()
      } else {
        target.style.width = '25px'
        target.style.height = '25px'
        piece.style.transform = ''
        capturedWhite.append(piece)
        renderScore()
      }
      selected.pop()
      firstClick = true
      autoRotate()
    }
  }

})

// Render leading player's score in footer
function renderScore() {
  let scores = {
    pawn: 1,
    knight: 3,
    bishop: 3,
    rook: 5,
    queen: 9
  }
  let whiteScore = document.querySelector('.white .score')
  let blackScore = document.querySelector('.black .score')
  let whiteNum = 0
  let blackNum = 0
  let capturedBlackPieces = capturedBlack.children
  let capturedWhitePieces = capturedWhite.children

  for (let key in scores) {
    for (let i = 0; i < capturedBlackPieces.length; i++) {
      if (capturedWhitePieces[i].classList.item(1) === key) blackNum += scores[key]
    }
    for (let i = 0; i < capturedWhitePieces.length; i++) {
      if (capturedBlackPieces[i].classList.item(1) === key) whiteNum += scores[key]
    }
  }

  if (whiteNum === blackNum) {
    blackScore.textContent = ''
    whiteScore.textContent = ''
  } else if (whiteNum > blackNum) {
    blackScore.textContent = ''
    whiteScore.textContent = '' + '+' + (whiteNum - blackNum)
  } else {
    whiteScore.textContent = ''
    blackScore.textContent = '' + '+' + (blackNum - whiteNum)
  }
}
