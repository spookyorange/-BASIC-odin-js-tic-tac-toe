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

  const playTurn = () => {
    
  }

  const addEvent = (listItem, i) => {
    listItem.addEventListener('click', () => {
      playTurn(board[i])
    })
  }

  const setBoard = (board) => {
    const boardList = document.querySelector("#board")
    const children = boardList.children
    for(i=0; i < 9; i++) {
      children[i].innerHTML = board[i]
      addEvent(children[i], i)
    }
  }

  const startGame = () => {
    setBoard(board)
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

