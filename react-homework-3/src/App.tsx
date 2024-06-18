import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import countriesData from './data/countries.json';
import { Region } from "./common/region.enum";
import { Country } from "./common/country.interface";

// Map JSON data to Country type
const countries: Country[] = countriesData.map((c: any) => ({
    ...c,
    region: c.region as Region,
}));

function App() {
    const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>(countries);

    useEffect(() => {
        if (selectedRegion) {
            setFilteredCountries(countries.filter(country => country.region === selectedRegion));
        } else {
            setFilteredCountries(countries);
        }
    }, [selectedRegion]);

    return (
        <>
            <Navbar selectRegion={setSelectedRegion} />
            <Routes>
                {/* Route for all countries (no filtering) */}
                <Route
                    path="/"
                    element={<Home countries={countries} />} // Pass all countries
                />
                {/* Route for filtered countries by selected region */}
                <Route
                    path="/region/:regionName"
                    element={<Home countries={countries} />}
                />
            </Routes>
        </>
    );
}

export default App;
