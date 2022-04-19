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
  let gameOn = 0
  let counter = 1
  const playGame = (node) => {

  }

  const playTurn = (i, counter) => {
    if (counter == 1) {
      board[i] = 'X'
      counter = 2
    }
    else {
      board[i] = 'O'
      counter = 1
    }
    setBoard(board, counter)
  }

  const addEvent = (listItem, i, counter) => {
    listItem.addEventListener('click', () => {
      playTurn(i, counter)
    })
  }

  const setBoard = (board, counter) => {
    const boardList = document.querySelector("#board")
    const children = boardList.children
    for(i=0; i < 9; i++) {
      children[i].innerHTML = board[i]
      addEvent(children[i], i, counter)
    }
  }

  const startGame = () => {
    setBoard(board, counter)
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

