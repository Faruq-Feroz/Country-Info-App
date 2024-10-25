import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetailsPage = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((response) => response.json())
      .then((data) => setCountry(data[0]));
  }, [code]);

  if (!country) return <p>Loading...</p>;

  return (
    <div className="country-details">
      <h2 className="country-name">{country.name.common}</h2>
      <img
        className="country-flag"
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
      />

      <div className="country-info">
        <p><span className="label">Population:</span> {country.population.toLocaleString()}</p>
        <p><span className="label">Region:</span> {country.region}</p>
        <p><span className="label">Languages:</span> {Object.values(country.languages).join(', ')}</p>
        <p><span className="label">Capital:</span> {country.capital}</p>
      </div>
    </div>
  );
};

export default CountryDetailsPage;
