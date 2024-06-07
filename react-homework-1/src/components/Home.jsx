import '../index.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'
import img9 from '../assets/9.jpg'
import img10 from '../assets/10.jpg'


const Home = () => {
  return (
    <>
     <div className="container"> 
        <h1 className='main-home-h1'>10 Most popular tourist destinations</h1>
        
        <div className="card">
            <h2>Item 1</h2>
            <img src={img1} alt="Item 1"/>
            <p>Description of Item 1 goes here.</p>
            <button>View Details</button>
        </div>
        <div className="card">
            <h2>Item 2</h2>
            <img src={img2} alt="Item 2"/>
            <p>Description of Item 2 goes here.</p>
            <button>View Details</button>
        </div>
        <div className="card">
            <h2>Item 3</h2>
            <img src={img3} alt="Item 3"/>
            <p>Description of Item 3 goes here.</p>
            <button>View Details</button>
        </div>
        <div className="card">
            <h2>Item 4</h2>
            <img src={img4} alt="Item 4"/>
            <p>Description of Item 4 goes here.</p>
            <button>View Details</button>
        </div>
        <div className="card">
            <h2>Item 4</h2>
            <img src={img5} alt="Item 4"/>
            <p>Description of Item 4 goes here.</p>
            <button>View Details</button>
        </div>
        <div className="card">
            <h2>Item 4</h2>
            <img src={img6} alt="Item 4"/>
            <p>Description of Item 4 goes here.</p>
            <button>View Details</button>
        </div>
        <div className="card">
            <h2>Item 4</h2>
            <img src={img7} alt="Item 4"/>
            <p>Description of Item 4 goes here.</p>
            <button>View Details</button>
        </div>
        <div className="card">
            <h2>Item 4</h2>
            <img src={img8} alt="Item 4"/>
            <p>Description of Item 4 goes here.</p>
            <button>View Details</button>
        </div>
        <div className="card">
            <h2>Item 4</h2>
            <img src={img9} alt="Item 4"/>
            <p>Description of Item 4 goes here.</p>
            <button>View Details</button>
        </div>
        <div className="card">
            <h2>Item 4</h2>
            <img src={img10} alt="Item 4"/>
            <p>Description of Item 4 goes here.</p>
            <button>View Details</button>
        </div>
        
    </div>
    </>
  )
}

export default Home