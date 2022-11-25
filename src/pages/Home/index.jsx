import IMG from "../../assets/IMG.png";
import Card from "../../components/Card";
import "../../styles/style.css";
import { housingList } from "../../datas/housingList";
function Home() {
    return (
        <div>
            <div className="kasa__home">
                <img
                    src={IMG}
                    alt="Paysage d'une forêt"
                    className="kasa__home__image"
                />
                <h2 className="kasa__home__text">
                    Chez vous, partout et ailleurs
                </h2>
            </div>
            <div className="kasa__card">
                {housingList.map(({ id, cover, title }) => (
                    <Card key={`${cover}-${id}`} cover={cover} title={title} />
                ))}{" "}
            </div>
        </div>
    );
}

export default Home;
