import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"

import React, { useState } from 'react'

const App = () => {

  const [region, setRegion] = useState('home');

  const handleRegionClick = (regionName) => {
    setRegion(regionName);
  };

  return (
   
     <div>
      <Navbar handleRegionClick={handleRegionClick} />
      <div>
        {/* {region === 'home' && <Home />}
        {region === 'europa' && <h1 className="second-h1">Welcome to Europa</h1>}
        {region === 'asia' && <h1 className="second-h1">Welcome to Asia</h1>}
        {region === 'africa' && <h1 className="second-h1">Welcome to Africa</h1>}
        {region === 'america' && <h1 className="second-h1">Welcome to America</h1>}
        {region === 'oceania' && <h1 className="second-h1">Welcome to Oceania</h1>} */}
      </div>

      <Footer />
    </div>
 
  )
}

export default App