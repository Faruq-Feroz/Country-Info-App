
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryCard = ({ country }) => {
    return (
      <div className="country-card">
        <img src={country.flags.svg} alt={`${country.name.common} flag`} />
        <h2>{country.name.common}</h2>
        <p>Region: {country.region}</p>
        <Link to={`/country/${country.cca3}`}>View Details</Link>
      </div>
    );
  };
  

  CountryCard.propTypes = {
    country: PropTypes.shape({
      flags: PropTypes.shape({
        svg: PropTypes.string.isRequired,
      }).isRequired,
      name: PropTypes.shape({
        common: PropTypes.string.isRequired,
      }).isRequired,
      region: PropTypes.string.isRequired,
      cca3: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default CountryCard;