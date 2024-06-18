
import { Country } from "../common/country.interface";

type CountryCardProps = {
    country: Country;
}

function CountryCard ({country}: CountryCardProps) {
   
    
    
    return(
        <div className='border p-4 rounded shadow'>
            <img
                src={country.image}
                alt={country.name}
                className='w-full h-40 object-cover mb-2'
            />
            <h3 className='text-lg font-bold'>{country.name}</h3>
            <p className='text-gray-600'>{country.description}</p>
            <p className='text-gray-600'>{`Region: ${country.region}`}</p>
            
            <div className='flex justify-between items-center mt-2'>
                <button className='bg-blue-500 text-white px-2 py-1 rounded'>
                    View More
                </button>
            </div>
        </div>
    )
}

export default CountryCard;
