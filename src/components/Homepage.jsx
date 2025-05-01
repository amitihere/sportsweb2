import React from "react";
import "./Homepage.css"
import BlurText from "../TextAnimations/BlurText/BlurText.jsx";
import GradientText from '../TextAnimations/GradientText/GradientText.jsx'
import ShinyText from '../TextAnimations/ShinyText/ShinyText.jsx';
import Masonry from './Masonry/Masonry.jsx'
import Footer from "./footer.jsx"
import Nav from "./navbar.jsx"

function Homepage() {
    const data = [
        { id: 1, image: 'image1.jpg', height: 500 },
        { id: 2, image: 'image2.jpg', height: 700 },
        { id: 3, image: 'image3.jpg', height: 400 },
        { id: 4, image: 'image4.jpg', height: 500 },
        { id: 5, image: 'image5.jpg', height: 400 },
        { id: 8, image: 'image6.jpg', height: 450 },
      ];
    const main = [{
        "image": "bookimg.jpg",
        "head": "BOOKING",
        "but": "BOOK"
    }]
    const member = [{
        "image": "table.jpg",
        "head": "MEMBERSHIP",
        "but": "MEMBER"
    }]
    const training =[{
        "image": "training.jpg",
        "head": "TRAINING",
        "but": "TO TRAIN",
        "butt": "TO LEARN"
    }]
    const store =[{
        "head": "STORE"
    }]
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
      };
    return (
        <div>
            <Nav/>
            <div className="back">
                <img src="new background.jpg"></img>
                <video src="sportshub-vid-2_8ohtdGFO.mp4_1745411639362.mp4" loop autoPlay muted playsInline></video>
                <div className="back-content">
                    <h1>.Train. | .Compete. | .Conquer.</h1>
                    <h3>Experience the thrill of the game in a sports complex where every match feels like a championship.</h3>
                    <button onClick={() => window.open("https://quiet-cucurucho-31f336.netlify.app", "_blank")}>BOOK NOW</button>
                </div>
            </div>
            <div className="second">
                <BlurText
                    text="Badminton"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-2xl mb-8"
                />
                <img className="mainimage1" src="badminton-court.png"></img>
                <ul>
                    <li>
                        Welcome to dropShot, where badminton meets excellence!
                        Enjoy world-class courts, top-quality lighting, and a vibrant atmosphere.
                        Experience the game like never before — premium, powerful, and perfect.
                    </li>
                </ul>
                <img className="logoinside" src="perfectlogo.jpg"></img>
                <h3>-We support the best-</h3>
                <img className="yoni" src="yonex-removebg-preview.png"></img>
                <img className="lini" src="lining-removebg-preview.png"></img>
                <img className="hundi" src="hundred-removebg-preview.png"></img>
            </div>
            <div className="second2">
                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={true}
                    className="custom-class"
                    link="/badminton"
                    
                    >
                    Book Now!
                </GradientText>
                <img className="vanish" src="vanish2.0.jpg"></img>
                <h1>-<span style={{color: "green"}}>Premium</span> Services-</h1>
                <h2 className="head1">Top-Quality Badminton Courts</h2>
                <img className="bad1" src="badminton-court.png"></img>
                <img className="bad2" src="badminton-court.png"></img>
                <img className="bad3" src="badminton-court.png"></img>
                <div className="linemake"></div>
                <ul className="firstlst">
                    <li>~ 3 Premium wooden flooring with Synthetic mats for natural bounce and reduced injury.</li>
                    <br></br>
                    <li>~ International-standard mats used, helping players adapt to real competition surfaces.</li>
                    <br></br>
                    <li>~ Cost Efficient i.e 480 per hour</li>
                </ul>
                <h2 className="head2">Training Programs</h2>
                <div className="linemake1"></div>
                <img className="smash" src="trainsmash-removebg-preview.png"></img>
                <ul className="secondlst">
                    <li>~ Training led by certified professional coaches.</li>
                    <ShinyText text="LEARN NOW" disabled={false} speed={3} className='custom-class' />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <li>~ We also encourage young talent to join us and train people from their experience.</li>
                    <button style={{color:"#b5b5b5a4",position:"absolute",width:"30%",height:"10%",backgroundColor:"transparent",border:"1px solid #b5b5b5a4",borderRadius:"9999px",fontSize:"3vh",top:"52%",right:"37%",cursor:"pointer"}}>Teach Us</button>
                </ul>
            </div>
            <div className="second3">
                <h2 className="head3">Memberships</h2>
                <div className="linemake2"></div>
                <img className="member" src="real-removebg-preview.png"></img>
                <ul className="thirdlst">
                    <li>~ Premium Members get <span style={{color:"gold"}}>Exclusive benefits</span> of our Sports complex.</li>
                    <br></br>
                    <li>~ Get to play daily on weekdays with 1 hour guranteed playing time.</li>
                    <br></br>
                    <li>~ Get free <span style={{fontWeight:"bold",color:"green"}}>Mavis 350 shuttle</span> everyone month.</li>
                </ul>
                <h1 className="head4">Store</h1>
                <h3 className="fourthlst">WE PROVIDE YOU EVERYTHING REQUIRED </h3>
                <Masonry data={data} />

            </div>
            <Footer/>
        </div>
           
        

    )
}
export default Homepage