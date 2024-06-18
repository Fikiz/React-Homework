import { useState } from 'react';
import { Country } from '../common/country.interface';
import CountryCard from './CountryCard';
import { useParams } from 'react-router-dom';

type HomePageProps = {
    countries: Country[];
};

export default function Home({ countries }: HomePageProps) {
    const { regionName } = useParams<{ regionName: string | undefined }>();
    const [searchQuery, setSearchQuery] = useState('');

    // Filter the data based on the regionName if defined, otherwise show all countries
    const filteredData: Country[] = regionName
        ? countries.filter(country => country.region === regionName)
        : countries;


    // Filter data based on search query
    const searchData = filteredData.filter(country => 
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className='text-3xl font-bold mb-4'>10 Most Popular Tourist Destinations</h1>
            {!regionName && (
                <div className="mb-4">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search countries..."
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                
                {searchData.map(country => (
                    <CountryCard
                        key={country.id}
                        country={country}
                    />
                ))}
            </div>
        </div>
    );
}
