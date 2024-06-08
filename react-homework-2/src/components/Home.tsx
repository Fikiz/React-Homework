import { useState } from 'react';
import data from '../data/data.json';
import '../index.css';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    // filter the data based on the search term
    const filteredData = data.filter(d => {
        if (searchTerm === "") {
            return true; 
        } else if (d.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true; 
        } else {
            return false; 
        }
    });

    return (
        <div className="container"> 
            <h1 className='main-home-h1'>10 Most popular tourist destinations</h1>
            <br />
            <div className="searchContainer">
                <div className="searchInput">
                    <input type="text" placeholder="Search here..." onChange={(e => {
                        setSearchTerm(e.target.value);
                    })}/>
                </div>
                <div className='main-div'>
                    {/* filtering data */}
                    {filteredData.map(d => (
                        <div className="template" key={d.id}>
                            <img src={d.image} alt={d.name}/>
                            <h3>{d.name}</h3>
                            <p>{d.description}</p>
                            <button>View More</button>
                        </div>
                    ))}
                </div> 
            </div>
        </div>
    );
}
