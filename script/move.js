let blackPieces = document.querySelectorAll('.black')
let whitePieces = document.querySelectorAll('.white')
let pieces = []
let selected = []
let captured = []
let sqrs = document.querySelectorAll('.chess-board .col-1')
blackPieces.forEach(i => pieces.push(i))
whitePieces.forEach(i => pieces.push(i))



pieces.forEach(function(i) {
    i.addEventListener('click', function() {
      if (selected.length === 1) {
        // if (i.classList.contains(selected[0].classList.item(0))) {
          selected.splice(0, 1)
        //   console.log(selected);
        // event.stopPropagation()
        // }
      }
      if (selected.length === 0) {
        selected.splice(0, 0, i)
      }
    })
})

sqrs.forEach(function(i) {
  i.addEventListener('click', function() {
    if (i.childNodes[1] === selected[0]) {
      event.stopPropagation()
    } else {
      if (i.children.length !== 0) {
      //   captured.splice(0, 1)
      //   captured.splice(0, 0, i.childNodes[1])
      //
      //   console.log(i.childNodes)

        i.append(selected[0])
        console.log(i.childNodes)
        // (i.childNodes[1]).remove()
        selected.splice(0, 1)
        selected.splice(1, 1)
      } else {
        i.append(selected[0])
        selected.splice(0, 1)
      }
    }
  })
})
