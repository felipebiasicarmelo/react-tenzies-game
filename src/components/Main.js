import Dice from "./Dice"
import React from "react"

function Main() {
    
    const [dicesArray, setDicesArray] = React.useState([
            {id: 1, number: null, isSelected: false},
            {id: 2, number: null, isSelected: false},
            {id: 3, number: null, isSelected: false},
            {id: 4, number: null, isSelected: false},
            {id: 5, number: null, isSelected: false},
            {id: 6, number: null, isSelected: false},
            {id: 7, number: null, isSelected: false},
            {id: 8, number: null, isSelected: false},
            {id: 9, number: null, isSelected: false},
            {id: 10, number: null, isSelected: false},
        ])

    const [tenziesStart, setTenziesStart] = React.useState(false)
    const [count, setCount] = React.useState(0)
    
    const dicesComponents = dicesArray.map((dice) => {
        return(<Dice key={dice.id} id={dice.id} number={dice.number} isSelected={dice.isSelected}/>)
    })

    function rollDice() {
    setTenziesStart(true);
    setCount((prevCount) => prevCount + 1);

    setDicesArray((prevDicesArray) =>
      prevDicesArray.map((item) => {
        if (item.isSelected) {
          return item; // mantém o dado se estiver selecionado
        }
        return {
          ...item,
          number: Math.floor(Math.random() * 6) + 1, // 1 a 6
        };
      })
    )}



    return (
        <main> 
            <div className="tenzies-dices-container">
                {dicesComponents}
            </div>

            <button onClick={rollDice}> {tenziesStart ? "Roll the dice" : "Start Game"} </button>

            {tenziesStart ? <p> Count: {count}</p> : null}
        </main>
    )
}

export default Main