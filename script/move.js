let blackPieces = document.querySelectorAll('.black')
let whitePieces = document.querySelectorAll('.white')
let pieces = []
let selected = []
let sqrs = document.querySelectorAll('.chess-board .col-1')
blackPieces.forEach(i => pieces.push(i))
whitePieces.forEach(i => pieces.push(i))

pieces.forEach(function(i) {
    i.addEventListener('click', function() {
        selected.splice(0, 0, i)
    }, false)
})

sqrs.forEach(function(i) {
  i.addEventListener('click', function() {
    if (i.childNodes[1] === selected[0]) {
      selected.splice(0, 1)
      event.stopPropagation()
    } else {
      if (i.children.length !== 0) {
        i.replaceChild(selected[0], i.childNodes[1])
        selected.splice(0, 1)
        selected.splice(1, 1)
      } else {
        i.append(selected[0])
        selected.splice(0, 1)
      }
    }
  }, true)
})
