import IMG from "../../assets/IMG.png";
import "../../styles/style.css";
import PropTypes from "prop-types";
import { housingList } from "../../datas/housingList";
function Home({ id, cover, title }) {
    return (
        <div>
            <div className="kasa__home">
                <img
                    src={IMG}
                    alt="Paysage d'une forêt"
                    className="kasa__home__image"
                />
                <h1 className="kasa__home__text">
                    Chez vous, partout et ailleurs
                </h1>
            </div>
            <div className="kasa__card">
                {housingList.map(({ id, cover, title }) => (
                    <div className="kasa__card__bloc" key={id - title}>
                        <img
                            className="kasa__card__cover"
                            src={cover}
                            alt="Logement"
                        />
                        <h2 className="kasa__card__title">{title} </h2>
                    </div>
                ))}{" "}
            </div>{" "}
        </div>
    );
}

Home.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
export default Home;
