import PropTypes from "prop-types";
import "../../styles/style.css";

function Card({ id, cover, title }) {
    return (
        <div >
            <div className="kasa__card__bloc" id={`card-${cover}`}>
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
