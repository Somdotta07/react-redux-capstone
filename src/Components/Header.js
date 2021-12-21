import { Link } from 'react-router-dom';
import { FaMicrophone, FaLessThan } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

export default function Header() {
  return (
    <div className="header">
      <nav className="nav">
        <div className="lessThan">
          <Link to="/"><FaLessThan /></Link>
          <h1 className="logo">2021</h1>
        </div>

        <h3>Covid Data</h3>
        <div className="mic"><FaMicrophone /></div>
        <div className="settings"><FiSettings /></div>
      </nav>
      {/* <div className="nav-item">
        <Link to="/"><li className="nav-b">Home</li></Link>
        <Link to="/details"><li className="nav-c">Details</li></Link>
      </div> */}
    </div>
  );
}
