import Dice from "./Dice"

function Main() {
    return (
        <main> 
            <div class="tenzies-dices-container">
                <Dice id={1} number={6} isSelected={false}/>
                <Dice id={2} number={6} isSelected={false}/>
                <Dice id={3} number={6} isSelected={false}/>
                <Dice id={4} number={6} isSelected={false}/>
                <Dice id={5} number={6} isSelected={false}/>


                <Dice id={6} number={6} isSelected={false}/>
                <Dice id={7} number={6} isSelected={false}/>
                <Dice id={8} number={6} isSelected={false}/>
                <Dice id={9} number={6} isSelected={false}/>
                <Dice id={10} number={6} isSelected={false}/>

            </div>
        </main>
    )
}

export default Main