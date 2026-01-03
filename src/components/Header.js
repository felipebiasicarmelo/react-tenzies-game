import dicesLogo from "../dices-logo.svg"

function Header() {
    return (
        <header> 
            <img src={dicesLogo} alt="Tenzies logo"/>
            <span>Tenzies Game </span>
        </header>
    )
}

export default Header