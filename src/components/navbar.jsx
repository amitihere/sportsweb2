import React from "react";
import {useState, useEffect} from "react"
import "./navbar.css"
import { Link } from "react-router-dom";
import perfectlogo from '../../perfectlogo.jpg';

const Nav = () =>{
    const [visible, setVisible] = useState(false);

    useEffect(() =>{
        const id = setTimeout(()=>{
            setVisible(true)
        },700)

        return () => clearTimeout(id)
    },[])

    const handleClick = () => {
        const scrollTarget = document.body.scrollHeight * 6; // 600%
        window.scrollTo({ top: scrollTarget, behavior: "smooth" });
      };

    const navstyle = {
        width: "100vw",
        height: "12vh",
        backgroundColor: "transparent",
        boxShadow: "none",
        marginTop: 0,
        padding: 0,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.8s ease-in-out",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        zIndex: "3",
    }

    return (<>
            <div style={navstyle}>
                <img className="image1" src={perfectlogo} alt="Logo" />
                    <ul style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-evenly",
                        fontSize:"2.5vh",
                        padding:0,
                        margin:0,
                        listStyle:"none",
                        position:"absolute",
                        left:"20%",
                        top:"33%",
                        width:"60%",
                        }}>
                            <li><Link to="/tabletennis" className="nav-link">TableTennis</Link></li>
                            <li><Link to="/" className="nav-link">Badminton</Link></li>
                            <li>
                                <a 
                                    className="nav-link" 
                                    href="#"
                                    onClick={handleClick}
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <button className="book-button"
                                onClick={() => window.open("https://quiet-cucurucho-31f336.netlify.app", "_blank")}>
                                    BOOK</button>
                            </li>
                    </ul>
            </div>
    </>

    )
}
export default Nav;
