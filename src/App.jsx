const TURNS = {
  x: 'x',
  o: 'o'
}

const Square = ({children, updateBoard, index}) => {
  return(
    <div className="square">
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.x)

  return (
  <main className='board'>
    <h1>Tic tac toe</h1>
    <section className="game">
      {
        board.map((_, index)=>{
          return (
            <Square
              key={index}
              index={index}
              >
                {index}
              </Square>
          )
        })
      }
    </section>

    <section className="turn">
      <Square isSelected={turn===TURNS.x}>
        {TURNS.x}
        </Square>
      <Square isSelected={turn===TURNS.o}>
        {TURNS.o}
        </Square>
    </section>
  </main>
  )
}


export default App
