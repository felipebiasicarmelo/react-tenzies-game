function Dice(props) {
    return(
        <div className={`dice ${props.isSelected ? "isSelected" : ""}`} > 
            <span> {props.number} </span>
        </div>
    )
}

export default Dice