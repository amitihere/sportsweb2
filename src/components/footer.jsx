import React from 'react'
import "./footer.css"
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <div className='foot'>
        <img className="footimg" src='perfectlogo.jpg'></img>
        <ul>
            <li><Link to="/" className="nav-link1" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link></li>
            <li><Link to="/" className="nav-link1" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Badminton</Link></li>
            <li><Link to="/tabletennis" className="nav-link1" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>TableTennis</Link></li>
        </ul>
        <div className='contact-info'>
            <img src='locicon-removebg-preview.png'></img>
            <h4>Opposite of Raddison Blu Resort, Rushikonda, Beach Rd, Yendada, Visakhapatnam, Andhra Pradesh 530045</h4>
        </div>
        <div className='contact'>
            <h3>Our Reach</h3>
            <br></br>
            <img src='youtube-removebg-preview.png'></img>
            <img src='instagram-removebg-preview.png'></img>
        </div>
        <h3 style={{color:"beige",position:"absolute",left:"56%",fontSize:"3vh",top:"60%",width:"30%",textAlign:"center"}}>Any other queries please contact us by +91 9878272846</h3>
        <h3 style={{color:"beige",position:"absolute",left:"57%",fontSize:"3vh",top:"75%",width:"30%",textAlign:"center"}}>dropShot.service@gmail.com</h3>
    </div>
  )
}

export default footer