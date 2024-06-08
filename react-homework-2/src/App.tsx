import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { useState } from "react"
import { Region } from "./common/region.enum";


function App() {
 const [selectedRegion, setSelectedRegion] = useState<Region | null>(
  null
 );


  return (
    <>
      <Navbar selectRegion={setSelectedRegion} />
      {selectedRegion === null ? (
        <Home />
      ) : (
        <div>{selectedRegion}</div>
      )}
    
    </>
  )
}

export default App
