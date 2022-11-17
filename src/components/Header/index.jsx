import { Link } from "react-router-dom";
import "../../styles/Header.css";
import logo from "../../assets/logo.png";

function Header() {
    return (
        <div className='kasa-banner'>
            <img src={logo} alt="logo Kasa" className="kasa-banner-logo" />
          
            <Link to="/" className="kasa-banner-page">
                Accueil
            </Link>
            <Link to="/about" className="kasa-banner-page">
                A Propos
            </Link>
            
        </div>
    );
}

export default Header;
