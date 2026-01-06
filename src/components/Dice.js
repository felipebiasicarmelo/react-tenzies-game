function Dice(props) {
    
    function holdTheDice() {
        props.holdDice(props.id)
    }
    
    return(
        <div className={`dice ${props.isSelected ? "isSelected" : ""}`} onClick={holdTheDice}> 
            <span> {props.number} </span>
        </div>
    )
}

export default Dice