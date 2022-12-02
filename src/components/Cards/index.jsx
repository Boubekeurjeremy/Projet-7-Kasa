import PropTypes from "prop-types";
import "../../styles/css/prefixed/style.css";

function Card({ cover, title }) {
    return (
        <div >
            <div className="kasa__card__bloc" >
                <img className="kasa__card__cover" src={cover} alt="Logement" />
                <h1 className="kasa__card__title">{title}</h1>
            </div>
        </div>
    );
}

Card.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
Card.defaultProps = {
    cover: "",
    title: "",
};
export default Card;
