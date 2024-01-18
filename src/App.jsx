import { BrowserRouter  } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="hue-shift-animation bg-hero-pattern bg-cover bg-norepeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <div className="hue-shift-animation">
        <About/>
        <Experience/>
      </div>
      <Tech/>
      <div className="hue-shift-animation">
        <Works/>
      </div>
      <div className="hue-shift-animation relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
