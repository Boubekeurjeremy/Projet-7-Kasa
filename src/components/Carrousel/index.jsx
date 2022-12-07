import "../../styles/css/prefixed/style.css";
import fleche from "../../assets/fleche.png";
import PropTypes from "prop-types";
import { useCarrousel } from "../../Hooks/Carrousel";

function Carrousel({ images }) {
    const { imgPrevious, imgNext, numberImg, displayImg } =
        useCarrousel(images);
    return (
        <div className="kasa__defilement">
            {numberImg > 1 && (
                <img
                    className="kasa__defilement__fleche kasa__defilement__fleche__left"
                    src={fleche}
                    alt="Contenu précedént"
                    onClick={imgPrevious}
                />
            )}
            {images.map((image, index) => {
                return (
                    <img
                        key={index}
                        className={
                            index === displayImg
                                ? "kasa__defilement__img actif"
                                : "kasa__defilement__img"
                        }
                        src={image}
                        alt="Logement"
                    />
                );
            })}
            {numberImg > 1 && (
                <img
                    className="kasa__defilement__fleche kasa__defilement__fleche__right"
                    src={fleche}
                    alt="Contenu suivant"
                    onClick={imgNext}
                />
            )}
        </div>
    );
}

Carrousel.propTypes = {
    image: PropTypes.string.isRequired,
};
Carrousel.defaultProps = {
    image: "",
};
export default Carrousel;
