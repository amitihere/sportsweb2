import React from 'react'
import "./TableTennis.css"
import BlurText from "../TextAnimations/BlurText/BlurText.jsx";
import GradientText from '../TextAnimations/GradientText/GradientText.jsx'
import ShinyText from '../TextAnimations/ShinyText/ShinyText.jsx';
import Masonry from './Masonry/Masonry.jsx'
import Footer from "./footer.jsx"
import Nav from "./navbar.jsx"

// Import images
import tableback from '../../tableback.jpg';
import sportshubVideo from '../../sportshub-vid-2_8ohtdGFO.mp4_1745411639362.mp4';
import tablett from '../../tablett-removebg-preview.png';
import perfectlogo from '../../perfectlogo.jpg';
import stag1 from '../../stag1-removebg-preview.png';
import butter from '../../butter-removebg-preview.png';
import doni from '../../doni-removebg-preview.png';
import vanish from '../../vanish2.0.jpg';
import supertt from '../../supertt-removebg-preview.png';
import supptt from '../../supptt-removebg-preview.png';
import rackett from '../../rackett-removebg-preview.png';
import afffefewfee from '../../afffefewfee-removebg-preview.png';
import image2 from '../../image2.jpg';
import image4 from '../../image4.jpg';
import image5 from '../../image5.jpg';
import image6 from '../../image6.jpg';

const TableTennis = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
      };
      const data = [
        { id: 1, image: rackett, height: 500 },
        { id: 2, image: image2, height: 700 },
        { id: 3, image: afffefewfee, height: 400 },
        { id: 4, image: image4, height: 500 },
        { id: 5, image: image5, height: 400 },
        { id: 8, image: image6, height: 450 },
      ];
  return (
    <div>
        <Nav/>
        <div className="back1">
                <img src={tableback} alt="Table Tennis Background" />
                <video src={sportshubVideo} loop autoPlay muted playsInline></video>
                <div className="back-content1">
                    <h1>.Train. | .Compete. | .Conquer.</h1>
                    <h3>Experience the thrill of the game in a sports complex where every match feels like a championship.</h3>
                    <button className='butto' onClick={() => window.open("https://quiet-cucurucho-31f336.netlify.app", "_blank")}>BOOK NOW</button>
                </div>
        </div>
        <div className="third">
                <BlurText
                    text="TableTennis"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-2xl mb-8"
                />
                <img className="mainimage1" src={tablett} alt="Table Tennis" />
                <ul>
                    <li>
                        Welcome to dropShot, where badminton meets excellence!
                        Enjoy world-class courts, top-quality lighting, and a vibrant atmosphere.
                        Experience the game like never before — premium, powerful, and perfect.
                    </li>
                </ul>
                <img className="logoinside" src={perfectlogo} alt="Logo" />
                <h3>-We support the best-</h3>
                <img className="yoni" src={stag1} alt="Stag" />
                <img className="lini" src={butter} alt="Butter" />
                <img className="hundi" src={doni} alt="Doni" />
        </div>
        <div className="third2">
                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={true}
                    className="custom-class"
                    link="/badminton"
                >
                    Book Now!
                </GradientText>
                <img className="vanish" src={vanish} alt="Vanish" />
                <h1>-<span style={{color: "lightblue"}}>Premium</span> Services-</h1>
                <h2 className="head1">Top-Quality TT Tables</h2>
                <img className="bad1" src={tablett} alt="Table Tennis" />
                <img className="bad2" src={tablett} alt="Table Tennis" />
                <div className="linemake"></div>
                <ul className="firstlst">
                    <li>~ Ensures a consistent ball bounce and smooth footwork essential for table tennis.</li>
                    <br></br>
                    <li>~ Same type of surface used in major table tennis tournaments worldwide.</li>
                    <br></br>
                    <li>~ Cost Efficient i.e 380 per hour</li>
                </ul>
                <h2 className="head2">Training Programs</h2>
                <div className="linemake1"></div>
                <img className="smash" src={supertt} alt="Super TT" />
                <ul className="secondlst">
                    <li>~ Training led by certified professional coaches.</li>
                    <ShinyText text="LEARN NOW" disabled={false} speed={3} className='custom-class' />
                    <br></br>
                    <br></br>
                    <li>~ We also encourage young talent to join us and train people from their experience.</li>
                    <button style={{color:"#b5b5b5a4",position:"absolute",width:"30%",height:"10%",backgroundColor:"transparent",border:"1px solid #b5b5b5a4",borderRadius:"9999px",fontSize:"3vh",top:"52%",cursor:"pointer"}} >Teach Us</button>
                </ul>
        </div>
        <div className="third3">
                <h2 className="head3">Memberships</h2>
                <div className="linemake2"></div>
                <img className="member" src={supptt} alt="Support TT" />
                <ul className="thirdlst">
                    <li>~ Premium Members get <span style={{color:"gold"}}>Exclusive benefits</span> of our Sports complex.</li>
                    <br></br>
                    <li>~ Get to play daily on weekdays with 1 hour guranteed playing time.</li>
                    <br></br>
                    <li>~ Get free <span style={{fontWeight:"bold",color:"lightblue"}}>4 star Stiga ball</span> everyone month.</li>
                </ul>
                <h1 className="head4">Store</h1>
                <h3 className="fourthlst">WE PROVIDE YOU EVERYTHING REQUIRED </h3>
                <Masonry data={data} />
            </div>
            <Footer/>
    </div>
  )
}

export default TableTennis