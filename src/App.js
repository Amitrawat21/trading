import logo from './logo.svg';

import './App.css';
import Whyus from './components/Whyus/Whyus';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Help from './components/help/Help';
import Contact  from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <div style={{backgroundColor:"#E6E0F4"}}>


   <Intro/>
   <Whyus/>
   <Help/>
   <Contact/>
   <Footer/>
  
   </div>

 
  );
}

export default App;
