import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import DetailsPage from './Components/DetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
