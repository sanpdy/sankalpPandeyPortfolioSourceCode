import { BrowserRouter  } from "react-router-dom";
import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="hue-shift-animation bg-primary">
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
      </div>
      <div className="hue-shift-animation relative z-0 bg-primary">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
