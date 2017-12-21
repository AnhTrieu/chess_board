let fileConverstion = ['a','b','c','d','e','f','g','h']
let rankConverstion = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

function validateBishopMove(start, destination) {
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
        if (newX, newY) legal.push([newX, newY])
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
        if (newX, newY) legal.push([newX, newY])
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
        if (newX, newY) legal.push([newX, newY])
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
        if (newX, newY) legal.push([newX, newY])
      }
    }

    calculateUpperLeft()
    calculateUpperRight()
    calculateLowerLeft()
    calculateLowerRight()
  }

  calculateLegalMoves()

  function validation() {
    let valid = false
    legal.forEach(function(i) {
      if ((destination.classList.item(1) === i[0]) && (destination.parentNode.classList.item(1) === i[1])) {
        valid = true
      }
    })
    return valid
  }
  return validation()
}

function validateRookMove(start, destination) {
  let legal = []

  function calculateLegalMoves() {

    function calculateForward() {
      let forward = {}
      let x = 0
      let y = 0
      for (let key in rankConverstion) {
        (start.parentNode.parentNode.classList.item(1) === key) ? y = rankConverstion[key]: ''
      }
      for (let key in fileConverstion) {
        (start.parentNode.parentNode.classList.item(1) === key) ? x = fileConverstion[key]: ''
      }
      while (y < 8) {
        y++
        newY = y
        for (let key in fileConverstion) {
          (x === fileConverstion[key]) ? x = key: ''
        }
        for (let key in rankConverstion) {
          (newY === rankConverstion[key]) ? newY = key: ''
        }
        let forward = []
        forward[0] = x
        forward[1] = newY
        legal.push(forward)
      }
    }

    function calculateBackward() {
      let backward = {}
      let x = 0
      let y = 0
      for (let key in rankConverstion) {
        (start.parentNode.parentNode.classList.item(1) === key) ? y = rankConverstion[key]: ''
      }
      for (let key in fileConverstion) {
        (start.parentNode.classList.item(1) === key) ? x = fileConverstion[key]: ''
      }
      while (y > 1) {
        y--
        newY = y
        for (let key in fileConverstion) {
          (x === fileConverstion[key]) ? x = key: ''
        }
        for (let key in rankConverstion) {
          (newY === rankConverstion[key]) ? newY = key: ''
        }
        let backward = []
        backward[0] = x
        backward[1] = newY
        legal.push(backward)
      }
    }

    function calculateLeft() {
      let left = {}
      let x = 0
      let y = 0
      for (let key in rankConverstion) {
        (start.parentNode.parentNode.classList.item(1) === key) ? y = rankConverstion[key]: ''
      }
      for (let key in fileConverstion) {
        (start.parentNode.classList.item(1) === key) ? x = fileConverstion[key]: ''
      }
      while (x > 1) {
        x--
        newX = x
        for (let key in fileConverstion) {
          (newX === fileConverstion[key]) ? newX = key: ''
        }
        for (let key in rankConverstion) {
          (y === rankConverstion[key]) ? y = key: ''
        }
        let left = []
        left[0] = newX
        left[1] = y
        legal.push(left)
      }
    }

    function calculateRight() {
      let right = {}
      let x = 0
      let y = 0
      for (let key in rankConverstion) {
        (start.parentNode.parentNode.classList.item(1) === key) ? y = rankConverstion[key]: ''
      }
      for (let key in fileConverstion) {
        (start.parentNode.classList.item(1) === key) ? x = fileConverstion[key]: ''
      }
      while (x < 8) {
        x++
        newX = x
        for (let key in fileConverstion) {
          (newX === fileConverstion[key]) ? newX = key: ''
        }
        for (let key in rankConverstion) {
          (y === rankConverstion[key]) ? y = key: ''
        }
        let right = []
        right[0] = newX
        right[1] = y
        legal.push(right)
      }
    }

    calculateForward()
    calculateBackward()
    calculateLeft()
    calculateRight()
  }

  calculateLegalMoves()

  function validation() {
    let valid = false
    legal.forEach(function(i) {
      if ((destination.classList.item(1) === i[0]) && (destination.parentNode.classList.item(1) === i[1])) {
        valid = true
      }
    })
    return valid
  }
  return validation()
}

function validateQueenMove(start, destination) {
  let legal = []

  function calculateLegalMoves() {

    function calculateUpperLeft() {
      let x = fileConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1
      let y = rankConverstion.indexOf(start.parentNode.classList.item(1)) + 1
      while (x > 1 && y < 8) {
        x--
        y++
        newX = fileConverstion[x - 1]
        newY = rankConverstion[y - 1]
        if (newX, newY) legal.push([newX, newY])
      }
    }

    function calculateUpperRight() {
      let x = fileConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1
      let y = rankConverstion.indexOf(start.parentNode.classList.item(1)) + 1
      while (x < 8 && y < 8) {
        x++
        y++
        newX = fileConverstion[x - 1]
        newY = rankConverstion[y - 1]
        if (newX, newY) legal.push([newX, newY])
      }
    }

    function calculateLowerRight() {
      let x = fileConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1
      let y = rankConverstion.indexOf(start.parentNode.classList.item(1)) + 1
      while (x < 8 && y > 1) {
        x++
        y--
        newX = fileConverstion[x - 1]
        newY = rankConverstion[y - 1]
        if (newX, newY) legal.push([newX, newY])
      }
    }

    function calculateLowerLeft() {
      let x = fileConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1
      let y = rankConverstion.indexOf(start.parentNode.classList.item(1)) + 1
      while (x > 1 && y > 1) {
        x--
        y--
        newX = fileConverstion[x - 1]
        newY = rankConverstion[y - 1]
        if (newX, newY) legal.push([newX, newY])
      }
    }

    function calculateForward() {
      let forward = {}
      let x = 0
      let y = 0
      for (let key in rankConverstion) {
        (start.parentNode.parentNode.classList.item(1) === key) ? y = rankConverstion[key]: ''
      }
      for (let key in fileConverstion) {
        (start.parentNode.classList.item(1) === key) ? x = fileConverstion[key]: ''
      }
      while (y < 8) {
        y++
        newY = y
        for (let key in fileConverstion) {
          (x === fileConverstion[key]) ? x = key: ''
        }
        for (let key in rankConverstion) {
          (newY === rankConverstion[key]) ? newY = key: ''
        }
        let forward = []
        forward[0] = x
        forward[1] = newY
        legal.push(forward)
      }
    }

    function calculateBackward() {
      let backward = {}
      let x = 0
      let y = 0
      for (let key in rankConverstion) {
        (start.parentNode.parentNode.classList.item(1) === key) ? y = rankConverstion[key]: ''
      }
      for (let key in fileConverstion) {
        (start.parentNode.classList.item(1) === key) ? x = fileConverstion[key]: ''
      }
      while (y > 1) {
        y--
        newY = y
        for (let key in fileConverstion) {
          (x === fileConverstion[key]) ? x = key: ''
        }
        for (let key in rankConverstion) {
          (newY === rankConverstion[key]) ? newY = key: ''
        }
        let backward = []
        backward[0] = x
        backward[1] = newY
        legal.push(backward)
      }
    }

    function calculateLeft() {
      let left = {}
      let x = 0
      let y = 0
      for (let key in rankConverstion) {
        (start.parentNode.parentNode.classList.item(1) === key) ? y = rankConverstion[key]: ''
      }
      for (let key in fileConverstion) {
        (start.parentNode.classList.item(1) === key) ? x = fileConverstion[key]: ''
      }
      while (x > 1) {
        x--
        newX = x
        for (let key in fileConverstion) {
          (newX === fileConverstion[key]) ? newX = key: ''
        }
        for (let key in rankConverstion) {
          (y === rankConverstion[key]) ? y = key: ''
        }
        let left = []
        left[0] = newX
        left[1] = y
        legal.push(left)
      }
    }

    function calculateRight() {
      let right = {}
      let x = 0
      let y = 0
      for (let key in rankConverstion) {
        (start.parentNode.parentNode.classList.item(1) === key) ? y = rankConverstion[key]: ''
      }
      for (let key in fileConverstion) {
        (start.parentNode.classList.item(1) === key) ? x = fileConverstion[key]: ''
      }
      while (x < 8) {
        x++
        newX = x
        for (let key in fileConverstion) {
          (newX === fileConverstion[key]) ? newX = key: ''
        }
        for (let key in rankConverstion) {
          (y === rankConverstion[key]) ? y = key: ''
        }
        let right = []
        right[0] = newX
        right[1] = y
        legal.push(right)
      }
    }

    calculateForward()
    calculateBackward()
    calculateLeft()
    calculateRight()
    calculateUpperLeft()
    calculateUpperRight()
    calculateLowerLeft()
    calculateLowerRight()
  }

  calculateLegalMoves()

  function validation() {
    let valid = false
    legal.forEach(function(i) {
      if ((destination.classList.item(1) === i[0]) && (destination.parentNode.classList.item(1) === i[1])) {
        valid = true
      }
    })
    return valid
  }
  return validation()
}

function validateKnightMove(start, destination) {
  let legal = []

  function calculateLegalMoves() {

    function first() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) - 1
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) + 2
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      if (newX && newY) legal.push([newX, newY])
    }

    function second() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) + 1
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) + 2
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      if (newX && newY) legal.push([newX, newY])
    }

    function third() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) + 2
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) + 1
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      if (newX && newY) legal.push([newX, newY])
    }

    function fourth() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) + 2
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) - 1
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      if (newX && newY) legal.push([newX, newY])
    }

    function fifth() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) + 1
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) - 2
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      if (newX && newY) legal.push([newX, newY])
    }

    function sixth() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) - 1
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) - 2
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      if (newX && newY) legal.push([newX, newY])
    }

    function seventh() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) - 2
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) - 1
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      if (newX && newY) legal.push([newX, newY])
    }

    function eighth() {
      let x = (fileConverstion.indexOf(start.parentNode.classList.item(1)) + 1) - 2
      let y = (rankConverstion.indexOf(start.parentNode.parentNode.classList.item(1)) + 1) + 1
      let newX = fileConverstion[x - 1]
      let newY = rankConverstion[y - 1]
      if (newX && newY) legal.push([newX, newY])
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

  function validation() {
    let valid = false
    legal.forEach(function(i) {
      if ((destination.classList.item(1) === i[0]) && (destination.parentNode.classList.item(1) === i[1])) {
        valid = true
      }
    })
    return valid
  }
  return validation()
}
