import  { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import CountryList from '../../Components/CountryList';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      });
  }, []);

  const handleSearch = (query) => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default Home;
