
import PropTypes from 'prop-types';
import CountryCard from './CountryCard';

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};


CountryList.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      cca3: PropTypes.string.isRequired,
      flags: PropTypes.shape({
        svg: PropTypes.string.isRequired,
      }).isRequired,
      name: PropTypes.shape({
        common: PropTypes.string.isRequired,
      }).isRequired,
      region: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default CountryList;

