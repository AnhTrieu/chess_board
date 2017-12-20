let squares = document.querySelectorAll('.chess-board .col-1')
let rotate = document.querySelector('.player-switch')
rotate.addEventListener('change', function() {
  rotateBoard()
})

squares.forEach(function(i) {
  i.addEventListener('mouseover', function() {
    let conversion = {
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4,
      'five': 5,
      'six': 6,
      'seven': 7,
      'eight': 8
    }
    let coverted = 0;
    for (let ele in conversion) {
      if ((i.parentElement.classList)[1] === ele) {
        converted = conversion[ele]
      }
    }
    document.querySelector('span').textContent = ' ' + (i.classList)[1] + converted
  })
  i.addEventListener('mouseout', function() {
    document.querySelector('span').textContent = ''
  })
})

function rotateBoard() {
  let chessBoard = document.querySelector('.chess-board')
  let rank = document.querySelector('.top .col-2')
  let rankLabel = rank.querySelectorAll('.row')
  let file = document.querySelector('.bottom .row')
  let fileLabel = file.querySelectorAll('.col-1')
  let blackPieces = document.querySelectorAll('.chess-board .black')
  let whitePieces = document.querySelectorAll('.chess-board .white')
  if (rotate.value === 'black') {
    chessBoard.style.transform = 'rotate(180deg)'
    rank.style.transform = 'rotate(180deg)'
    rankLabel.forEach(i => i.style.transform = 'rotate(180deg)')
    file.style.transform = 'rotate(180deg)'
    fileLabel.forEach(i => i.style.transform = 'rotate(180deg)')
    blackPieces.forEach(i => i.style.transform = 'rotate(180deg)')
    whitePieces.forEach(i => i.style.transform = 'rotate(180deg)')
  }
  if (rotate.value === 'white') {
    chessBoard.style.transform = ''
    rank.style.transform = ''
    rankLabel.forEach(i => i.style.transform = '')
    file.style.transform = ''
    fileLabel.forEach(i => i.style.transform = '')
    blackPieces.forEach(i => i.style.transform = '')
    whitePieces.forEach(i => i.style.transform = '')
  }
}
