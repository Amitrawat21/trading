import React from "react";
import "./Whyus.css";
import UpdateIcon from "@mui/icons-material/Update";
import LockIcon from "@mui/icons-material/Lock";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import right from "../../Assest/right.png";
import "./Whyus.css"
const Whyus = () => {
  return (
    <div className="whyus">
      <h1>Why Us ?</h1>
      <p>
        lorem 45 and this one i have to say something but i dont do this anymore
      </p>
      <div className="options">
        <div className="box">
          <UpdateIcon className="icons" />
          <h2>Lifetie Support</h2>
          <p>
            lorem wrr nd this is not my property and this is best we can do what
            ever u want thats it{" "}
          </p>
         <div className='learnmore'>
            <h4>learn More</h4>
            <img  className="right-arrow" src={right} />
          </div>
        </div>
        <div className="box">
          <LockIcon className="icons"  />
          <h2>High security </h2>
          <p>
            lorem wrr nd this is not my property and this is best we can do what
            ever u want thats it{" "}
          </p>
          <div className="learnmore">
            <h4>learn More</h4>
            <img className="right-arrow"  src={right} />
          </div>
        </div>
        <div className="box">
          <AssuredWorkloadIcon className="icons"  />
          <h2>Money Guarantee</h2>
          <p>
            lorem wrr nd this is not my property and this is best we can do what
            ever u want thats it{" "}
          </p>
          <div className="learnmore">
            <h4>learn More</h4>
            <img  className="right-arrow"  src={right} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
