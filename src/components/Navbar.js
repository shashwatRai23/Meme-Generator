import react from "react"
import ReactDOM from "react-dom"
import trollFace from "../images/troll-face.png"

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="nav--logo">
                <img className="nav--img" src={trollFace}/>
                <h1>Meme Generator</h1>
            </div>
            <div>React Course-Project 3</div>
        </nav>
    )
}