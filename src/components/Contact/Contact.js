import React from 'react'
import "./Contact.css"
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Swal from 'sweetalert2'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "37f9bf91-4184-4cf8-b137-7d82dfedd7a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Good job!",
        text: "message sent succesfully",
        icon: "success"
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
 
    <div class="form">
      <div class="contact-info">
        <h3 class="title">Let's get in touch</h3>
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          dolorum adipisci recusandae praesentium dicta!
        </p>

        <div class="info">
          <div class="information">
           <HomeIcon/>
            <p>92 Cherry Drive Uniondale, NY 11553</p>
          </div>
          <div class="information">
            <EmailIcon/>
            <p>lorem@ipsum.com</p>
          </div>
          <div class="information">
            <LocalPhoneIcon/>
            <p>123-456-789</p>
          </div>
        </div>

        {/* <div class="social-media">
          <p>Connect with us :</p>
          <div className="social-icons">
            <a href="#">
             <FacebookIcon style={{backgroundColor:"blue" , marginTop:"5px"}}/>
            </a>
            <a href="#">
              <TwitterIcon style={{backgroundColor:"blue" , marginTop:"5px"}}/>
            </a>
            <a href="#">
            <InstagramIcon style={{backgroundColor:"blue" , marginTop:"5px"}}/>
            </a>
            <a href="#">
             <LinkedInIcon style={{backgroundColor:"blue" , marginTop:"5px"}}/>
            </a>
          </div>
        </div> */}
      </div>

      <div class="contact-form">
        <span class="circle one"></span>
        <span class="circle two"></span>

        <form onSubmit={onSubmit}>
          <h3 class="title">Contact us</h3>
          <div class="input-container">
            <input type="text" name="name" class="input" placeholder='enter your name' />
            
          </div>
          <div class="input-container">
            <input type="email" name="email" class="input" placeholder='enter your email'  />
         
          </div>
          <div class="input-container">
            <input type="tel" name="phone" class="input" placeholder='enter your  phone number'  />
        
            
          </div>
          <div class="input-container textarea">
            <textarea name="message" class="input" placeholder='type your message' ></textarea>
          
            
          </div>
          <input type="submit" value="Send" class="btn" />
        </form>
      </div>
    </div>
 

  )
}

export default Contact