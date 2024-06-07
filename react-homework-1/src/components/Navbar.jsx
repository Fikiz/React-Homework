import '../index.css'

const Navbar = ({ handleRegionClick }) => {
  return (
    <header className="header">
        <a href="#" className='logo'>LOGO</a>

    <nav className='navbar'>
      <ul>
        <li><button onClick={() => handleRegionClick('home')}>Home</button></li>
        <li><button onClick={() => handleRegionClick('europa')}>Europa</button></li>
        <li><button onClick={() => handleRegionClick('asia')}>Asia</button></li>
        <li><button onClick={() => handleRegionClick('africa')}>Africa</button></li>
        <li><button onClick={() => handleRegionClick('america')}>America</button></li>
        <li><button onClick={() => handleRegionClick('oceania')}>Oceania</button></li>
      </ul>
    </nav>
    </header>
  )
}

export default Navbar