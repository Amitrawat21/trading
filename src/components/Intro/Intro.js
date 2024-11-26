import React from 'react'
import "./Intro.css"
import vector from "../../Assest/Vector.png";
import right from  "../../Assest/right.png";
import play from  "../../Assest/playicon.png";
import boy from  "../../Assest/boy.png";
import men from  "../../Assest/men.png";
import women from  "../../Assest/women.png";
import Navbar from '../Navbar/Navbar';

const Intro = () => {
  return (
    <>
    <Navbar/>
    <div className='intro'>
        <div className='heading'>
        <h1 className='childone'>CRYPTOCURRENCY MARKET</h1>
        <h1>creation at scale</h1>
        </div>
      
        <h4>Cryptocurrency exchange Buy , sell , trading anything</h4>
        
        <div className='start-button'>
            Get Started for free
            <img style={{backgroundColor :"blue"}} src= {right}/>

        </div>

        <div className='video'>
           <h5 className='demo'>demo <img src={play} style={{backgroundColor :"black"}}/></h5>

           <div className='demo-option'>
           <div className='all-option'>
                <img src={boy}/>
                <img src={men}/>
                <img src={women}/>

            </div>
            <h5>hey there we </h5>

           </div>

        </div>
     

    </div>
    </>
   
  )
}

export default Intro