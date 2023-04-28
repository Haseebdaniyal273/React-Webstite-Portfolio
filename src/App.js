import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Home from './Components/Home';
import Service from './Components/Service'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'

import { Routes , Route } from "react-router-dom"

function App() {
  return (
    
    <div className="App">
 <Header/>


<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Service" element={<Service/>}/>
<Route path="/Portfolio" element={<Portfolio/>}/>
<Route path="/Contact" element={<Contact/>}/>

</Routes>


    </div>
    

    ///////////////////
    
  );
}


export default App;
