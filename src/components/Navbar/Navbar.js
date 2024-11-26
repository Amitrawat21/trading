import React from "react";
import "./Navbar.css";
import vector from "../../Assest/Vector.png";
const Navbar = () => {
  return (
    <header className="header">
    <a href="#" className="logo">
     Trabot Research
    </a>
    <input type="checkbox" id="checkbox"/>
    <label for="checkbox" className="icons">
        <i className="fa-solid fa-bars" id="menu-icon"></i>
        <i className="fa-solid fa-x" id="close-icon"></i>
    </label>
    <nav className="navbar">
       <ul>
        <li>
            <a href="#" className="menu-item">Home</a>
            <img src={vector}/>

        </li>
        <li>
            <a href="#" className="menu-item">Use Cases</a>
            <img src={vector}/>

        </li>
        <li>
            <a href="#" className="menu-item">Features</a>
            <img src={vector}/>

        </li>
        <li>
            <a href="#" className="menu-item">Resources</a>
            <img src={vector}/>

        </li>
        <li>
            <a href="#" className ="menu-item">Pricing</a>
            <img src={vector}/>

        </li>
      
    </ul>
    </nav>
    <div className="login">
        <ul>
            <li>
                <a href="#" className="menu-item">Contact sales</a>

            </li>
           <button className="nav-button">
            get started
           </button>
        </ul>
    </div>

</header>
  );
};

export default Navbar;
