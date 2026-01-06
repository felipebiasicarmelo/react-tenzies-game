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
    const [gameWin, setGameWin] = React.useState(false)
    
    const dicesComponents = dicesArray.map((dice) => {
        return(<Dice key={dice.id} id={dice.id} number={dice.number} isSelected={dice.isSelected} holdDice={holdDice}/>)
    })


    React.useEffect(() => {
        function checkAllDiceEqual() {
            const firstElementNumber = dicesArray[0].number
            for (let i = 0; i < dicesArray.length; i++) {
            const die = dicesArray[i]
            const sameNumber = die.number === firstElementNumber
            const notNull = firstElementNumber !== null
            const isHeld = die.isSelected

            if (!(sameNumber && notNull && isHeld)) {
                return false
            }
            }
            return true
        }

        if (checkAllDiceEqual()) {
            alert("You Win")
            setGameWin(true)
        }
    }, [dicesArray])

    function rollDice() {
        setTenziesStart(true);
        setCount((prevCount) => prevCount + 1);

        setDicesArray((prevDicesArray) =>
        prevDicesArray.map((item) => {
            if (item.isSelected) {
                return item; 
                }
                return {
                ...item,
                number: Math.floor(Math.random() * 6) + 1,
                };
        })
        )
    
    }



    function holdDice(id) {
        if (tenziesStart) {     
            setDicesArray((prevDicesArray) =>
            prevDicesArray.map((item) => {
                if (item.id === id) {
                    return {...item, isSelected: !item.isSelected};
                }
                return item;
                })
            )
        }
    }



    return (
        <main> 
            <div className="tenzies-dices-container">
                {dicesComponents}
            </div>

            {gameWin 
            ? <button onClick={() => window.location.reload()}> Restart </button>
            : <button onClick={rollDice}> {tenziesStart ? "Roll the dice" : "Start Game"} </button>}

            {tenziesStart ? <p> Count: {count}</p> : null}

            {gameWin ? `You Win, it took ${count} rolls` : null}
        </main>
    )
}

export default Main