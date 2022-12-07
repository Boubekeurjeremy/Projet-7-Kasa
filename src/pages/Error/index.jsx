import { Link } from "react-router-dom";
import ERROR from "../../assets/404.png";
import "../../styles/css/prefixed/style.css";

function Error() {
    return (
        <div className="kasa__error">
            <img src={ERROR} alt="Error 404" className="kasa__error__number" />
            <h1 className="kasa__error__text">
                Oups! La page que vous demandez n'existe pas.{" "}
            </h1>
            <Link to="/" className="kasa__error__link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}

export default Error;
