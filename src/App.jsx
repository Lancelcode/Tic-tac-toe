import { useState } from "react"

const TURNS = {
  x: 'x',
  o: 'o'
}

const Square = ({ children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard()
  }
  
  return(
    <div onClick={handleClick}className={className}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )
  const [turn, setTurn] = useState(TURNS.x)

  const updateBoard = () => {
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turn === TURNS.o}>
          {TURNS.o}
        </Square>
      </section>
    </main>
  )
}

// minuto 22 https://www.youtube.com/watch?v=oWPFcuH8x6M
export default App
