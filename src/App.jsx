
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/Pages/Home';
import CountryDetailsPage from './assets/Pages/CountryDetailsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<CountryDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
