
import PropTypes from 'prop-types';

const Header = ({ onSearch }) => {
  return (
    <header>
      <h1>Country Search</h1>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
};


Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
