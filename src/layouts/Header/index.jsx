import { Link } from "react-router-dom";
import "../../styles/css/prefixed/style.css";
import logo from "../../assets/logo.png";

function Header() {
    return (
        <div className="kasa__banner">
            <img src={logo} alt="Logo Kasa" className="kasa__banner__logo" />

            <Link to="/" className="kasa__banner__page">
                Accueil
            </Link>
            <Link to="/about" className="kasa__banner__page">
                A Propos
            </Link>
        </div>
    );
}

export default Header;
