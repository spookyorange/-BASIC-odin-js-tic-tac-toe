const player = (name, symbol) => {
  // Factory because we will have 2 players
  const getSymbol = () => {
    return symbol
  }
  const getName = () => {
    return name
  }

  return { getSymbol, getName }
}

const gameController = (() => {
  const playerOne = player(prompt('name for player 1'), 'X')
  const playerTwo = player(prompt('name for player 2'), 'O')
  let board = Array(9).fill('')
  let counter = 1
  let gameOn = 0
  const playGame = (node) => {

  }


  const checkBoard = (i) => {
    console.log(i)
  }

  const checkPlay = (i) => {
    if (board[i] == 'X' || board[i] == 'O' || i > 9 || i < 0) {
      return false
    }
    else {
      return true
    }
  }

  const playTurn = (i) => {
    if (checkPlay(i)) {
      if (gameController.counter != 2) {
        board[i] = 'X'
        gameController.counter = 2
      }
      else {
        board[i] = 'O'
        gameController.counter = 1
      }
      
      checkBoard(i)
      setBoardDisplay(board)
    }
  }

  const addEvent = (listItem, i) => {
    listItem.addEventListener('click', () => {
      playTurn(i)
    })
  }

  const setBoardDisplay = (board) => {
    const boardList = document.querySelector("#board")
    const children = boardList.children
    for(i=0;i<=8;i++) {
      children[i].innerHTML = board[i]
    }
  } 

  const setBoard = () => {
    const boardList = document.querySelector("#board")
    const children = boardList.children
    setBoardDisplay(board)
    for(i=0; i < 9; i++) {
      addEvent(children[i], i)
    }
  }

  const startGame = () => {
    setBoard()
  }

  const initializeGame = () => {
    if (gameOn == 0) {
      startGame()
      gameOn = 1
    }
  }

  return { initializeGame }

})()


gameController.initializeGame()

