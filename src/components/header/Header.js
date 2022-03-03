import "./Header.css"
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <div className="head">
            <header>         
                <nav>
                <Link to='/'>  Home </Link>
                </nav>
                <h1 className="header">Travel Destination</h1>
            </header>
        </div>
    );
}

export default Header;