import React from 'react'
import './Hero.css';
//import './Header'
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {
  const transition={type:'spring',duration:3};
  const mobile=window.innerWidth<=768?true:false;
  return (
    <div className="hero" id='home'>
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
            {/* The best Ad */}
         <div className="the-best-ad">
            <motion.div initial={{left:mobile?"178px":"238px"}} 
            whileInView={{left:'8px'}}
            transition={transition}
            >

            </motion.div>
            <span>The Best Fitness Club In The Town</span>
            
        </div>   

         {/* The Hero Heading */}
         <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape</span> 
            <span>Your</span>
          </div>
          <div><span>Ideal Body</span></div>
          <div>
          <span>
             Here We Help You To Shape And Build Your Ideal Body And Live Up Your Life To Fullest
          </span>
            
          </div>

         </div>

         {/*Figures */}
        <div className="figures">
          <div><span><NumberCounter start={100} end={140} delay='4' preFix="+"/></span>
          <span>Expert Coaches</span></div>
          <div><span><NumberCounter start={600} end={978} delay='4' preFix="+"/></span><span>Members Joined</span></div>
          <div><span><NumberCounter start={30} end={50} delay='4' preFix="+"/></span><span>Coaching Programs</span></div>
        </div>
        
        {/*Buttons */}
        <div className="hero-buttons">
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>

        </div>

        {/*Right Side */}

        <div className="right-h">
          
          <motion.div 
          initial={{right:'-1rem'}}
          whileInView={{right:'4rem'}}
          className="heart-rate" transition={transition}>
            <img src={heart} alt="heartimg" />
            <span>Heart Rate</span>
            <span>116 Bpm</span>
          </motion.div>

        {/* Hero Images */}  
        <img className='hero-image' src={hero_image} alt="heroimg" />
        <motion.img
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
         className='hero-image-back' src={hero_image_back} alt="heroimgback" />
           {/* Calories */}
        <motion.div initial={{right:'237px'}} 
            whileInView={{right:'450px'}}
            transition={transition}
            className="calories">
          <img src={calories} alt="caloriesimg" />
          <div>
              <span>Calories Burned</span>
              <span>220 Kcal</span>
          </div>
          
        </motion.div>
        </div>

       
        
      
    </div>
  )
}

export default Hero
