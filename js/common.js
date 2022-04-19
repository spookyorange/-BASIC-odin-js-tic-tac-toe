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

  const endGame = (winner) => {
    board = Array(9).fill('')
    setBoardDisplay(board)
    gameController.counter = 1
    let winnerName = document.querySelector('#winner')
    let winnerHeader = document.querySelector('h2')

    winnerName.innerHTML = winner.getName()
    winnerHeader.classList.remove('hidden')
  }

  const checkBoard = (i, player) => {
    if ((board[i]==board[i-3]&&board[i-3]==board[i+3]) ||
    board[i]==board[i-1]&&board[i]==board[i+1] ||
    board[i]==board[i-4]&&board[i]==board[i+4] ||
    board[i]==board[i-2]&&board[i]==board[i+2] ||
    board[i]==board[i+3]&&board[i]==board[i+6] ||
    board[i]==board[i-3]&&board[i]==board[i-6] ||
    board[i]==board[i+1]&&board[i]==board[i-2] ||
    board[i]==board[i-1]&&board[i]==board[i-2] ||
    board[i]==board[i+4]&&board[i]==board[i+8] ||
    board[i]==board[i-2]&&board[i]==board[i-4] ||
    board[i]==board[i-4]&&board[i]==board[i-8] ||
    board[i]==board[i+2]&&board[i]==board[i+4]) {
      console.log('Gratz you win!')
      endGame(player)
    }
    console.log(i)
    console.log(player.getName())
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
        console.log('adjaskdnasdas')
        board[i] = playerOne.getSymbol()
        gameController.counter = 2
        setBoardDisplay(board)
        checkBoard(i, playerOne)
      }
      else {
        board[i] = playerTwo.getSymbol()
        gameController.counter = 1
        setBoardDisplay(board)
        checkBoard(i, playerTwo)
      }
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

