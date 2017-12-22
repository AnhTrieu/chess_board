let fileConverstion = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
let rankConverstion = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

function pieceIdentifier (start, destination) {

  if (start.classList.item(1) === 'pawn') return validateP(start, destination)
  if (start.classList.item(1) === 'king') return validateK(start, destination)
  if (start.classList.item(1) === 'knight') return validateN(start, destination)
  if (start.classList.item(1) === 'queen') return validateQ(start, destination)
  if (start.classList.item(1) === 'rook') return validateR(start, destination)
  if (start.classList.item(1) === 'bishop') return validateB(start, destination)

}


function validateB(start, destination) {
  let legal = []

  function calculateLegalMoves() {

    function calculateUpperLeft() {
      let x = fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1
      let y = rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1
      while (x > 1 && y < 8) {
        x--
        y++
        newX = fileConverstion[x - 1]
        newY = rankConverstion[y - 1]
        newX && newY ? legal.push([newX, newY]) : ''
      }
    }

    function calculateUpperRight() {
      let x = fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1
      let y = rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1
      while (x < 8 && y < 8) {
        x++
        y++
        newX = fileConverstion[x - 1]
        newY = rankConverstion[y - 1]
        newX && newY ? legal.push([newX, newY]) : ''
      }
    }

    function calculateLowerRight() {
      let x = fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1
      let y = rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1
      while (x < 8 && y > 1) {
        x++
        y--
        newX = fileConverstion[x - 1]
        newY = rankConverstion[y - 1]
        newX && newY ? legal.push([newX, newY]) : ''
      }
    }

    function calculateLowerLeft() {
      let x = fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1
      let y = rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1
      while (x > 1 && y > 1) {
        x--
        y--
        newX = fileConverstion[x - 1]
        newY = rankConverstion[y - 1]
        newX && newY ? legal.push([newX, newY]) : ''
      }
    }

    calculateUpperLeft()
    calculateUpperRight()
    calculateLowerLeft()
    calculateLowerRight()
  }

  calculateLegalMoves()

  return legal.some(i => ((destination.classList.item(1) === i[0]) && (destination.parentNode.classList.item(1) === i[1])) ? true : false)
}

function validateR(start, destination) {
  let legal = []

  function calculateLegalMoves() {

    function calculateForward() {
      let x = start.parentNode.classList.item(1)
      let y = rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1
      while (y < 8) {
        y++
        newY = rankConverstion[y - 1]
        newY ? legal.push([x, newY]) : ''
      }
    }

    function calculateBackward() {
      let x = start.parentNode.classList.item(1)
      let y = rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1
      while (y > 1) {
        y--
        newY = rankConverstion[y - 1]
        newY ? legal.push([x, newY]) : ''
      }
    }

    function calculateLeft() {
      let x = fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1
      let y = start.parentNode.parentNode.classList.item(1)
      while (x > 1) {
        x--
        newX = fileConverstion[x - 1]
        newX ? legal.push([newX, y]) : ''
      }
    }

    function calculateRight() {
      let x = fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1
      let y = start.parentNode.parentNode.classList.item(1)
      while (x < 8) {
        x++
        newX = fileConverstion[x - 1]
        newX ? legal.push([newX, y]) : ''
      }
    }

    calculateForward()
    calculateBackward()
    calculateLeft()
    calculateRight()
  }

  calculateLegalMoves()

  return legal.some(i => ((destination.classList.item(1) === i[0]) && (destination.parentNode.classList.item(1) === i[1])) ? true : false)
}

function validateQ(start, destination) {
  return (validateR(start, destination) || validateB(start, destination)) ? true : false
}

function validateN(start, destination) {
  let legal = []

  function calculateLegalMoves() {

    function first() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) - 1
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) + 2
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      newX && newY ? legal.push([newX, newY]) : ''
    }

    function second() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) + 1
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) + 2
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      newX && newY ? legal.push([newX, newY]) : ''
    }

    function third() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) + 2
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) + 1
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      newX && newY ? legal.push([newX, newY]) : ''
    }

    function fourth() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) + 2
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) - 1
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      newX && newY ? legal.push([newX, newY]) : ''
    }

    function fifth() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) + 1
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) - 2
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      newX && newY ? legal.push([newX, newY]) : ''
    }

    function sixth() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) - 1
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) - 2
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      newX && newY ? legal.push([newX, newY]) : ''
    }

    function seventh() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) - 2
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) - 1
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      newX && newY ? legal.push([newX, newY]) : ''
    }

    function eighth() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) - 2
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) + 1
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      newX && newY ? legal.push([newX, newY]) : ''
    }

    first()
    second()
    third()
    fourth()
    fifth()
    sixth()
    seventh()
    eighth()

  }

  calculateLegalMoves()

  return legal.some(i => ((destination.classList.item(1) === i[0]) && (destination.parentNode.classList.item(1) === i[1])) ? true : false)

}

function validateK(start, destination) {
  let legal = []

  function calculateLegalMoves() {

    function first() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) - 1
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) + 1
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      newX && newY ? legal.push([newX, newY]) : ''
    }

    function second() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1)
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) + 1
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      newX && newY ? legal.push([newX, newY]) : ''
    }

    function third() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) + 1
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) + 1
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      newX && newY ? legal.push([newX, newY]) : ''
    }

    function fourth() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) + 1
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1)
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      newX && newY ? legal.push([newX, newY]) : ''
    }

    function fifth() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) + 1
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) - 1
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      newX && newY ? legal.push([newX, newY]) : ''
    }

    function sixth() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1)
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) - 1
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      newX && newY ? legal.push([newX, newY]) : ''
    }

    function seventh() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) - 1
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) - 1
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      newX && newY ? legal.push([newX, newY]) : ''
    }

    function eighth() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) - 1
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1)
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      newX && newY ? legal.push([newX, newY]) : ''
    }

    first()
    second()
    third()
    fourth()
    fifth()
    sixth()
    seventh()
    eighth()
  }

  calculateLegalMoves()

  return legal.some(i => ((destination.classList.item(1) === i[0]) && (destination.parentNode.classList.item(1) === i[1])) ? true : false)
}

function validateP(start, destination) {
  let legal = []
  let x = start.parentNode.classList.item(1)
  let y = rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1
  legal[0] = [x, rankConverstion[y]]
  if (start.id === 'first-move') {
    legal[1] = [x, rankConverstion[y + 1]]
    start.id = ''
  }

  return legal.some(i => ((destination.classList.item(1) === i[0]) && (destination.parentNode.classList.item(1) === i[1])) ? true : false)
}
