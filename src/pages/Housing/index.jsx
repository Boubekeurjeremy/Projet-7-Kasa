import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { housingList } from "../../datas/housingList";
import "../../styles/css/prefixed/style.css";
import Carrousel from "../../components/Carrousel";
import Tag from "../../components/Tags";
import STAR from "../../assets/STAR.png";
import EmptyStar from "../../assets/EmptyStar.png";
import PropTypes from "prop-types";
import Collapse from "../../components/Collapse";

function Housing() {
    
    // Récupérer le bon logement

    const id = useParams();
    const housingForm = housingList.find((housing) => housing.id === id.id);

    // Gestion des tags

    const housingTag = housingForm?.tags.map((tags, index) => {
        return <Tag key={index} name={tags} />;
    });

    // Gestion des étoiles

    let housingNote = [];
    let completeStar = true;
    for (let index = 0; index < 5; index++) {
        if (index === parseInt(housingForm?.rating)) {
            completeStar = false;
        }
        if (completeStar === true) {
            housingNote.push(
                <img
                    key={index}
                    className="kasa__star"
                    src={STAR}
                    alt={`${housingForm?.rating}/5 étoiles`}
                />
            );
        } else {
            housingNote.push(
                <img
                    key={index}
                    className="kasa__star"
                    src={EmptyStar}
                    alt={`${housingForm?.rating}/5 étoiles`}
                />
            );
        }
    }

    // Gestion des équipements

    const housingEquipments = housingForm?.equipments.map(
        (equipment, index) => {
            return <li key={index}>{equipment}</li>;
        }
    );
    return (
        <>
            {" "}
            {housingForm ? (
                <div className="kasa__housing">
                    <Carrousel images={housingForm?.pictures} />
                    <div className="kasa__housing__bloc">
                        <div className="kasa__housing__news">
                            <h1 className="kasa__housing__title">
                                {housingForm?.title}
                            </h1>
                            <h2 className="kasa__housing__location">
                                {housingForm?.location}
                            </h2>

                            <div>{housingTag}</div>
                        </div>

                        <div className="kasa__housing__info">
                            <div className="kasa__housing__little__bloc">
                                <h3 className="kasa__housing__name">
                                    {housingForm?.host.name}
                                </h3>
                                <img
                                    className="kasa__housing__image"
                                    src={housingForm?.host.picture}
                                    alt="Propriétaire"
                                />
                            </div>
                            <div className="kasa__housing__note">
                                {housingNote}
                            </div>
                        </div>
                    </div>
                    <div className="kasa__housing__collapse">
                        <Collapse
                            title="Description"
                            description={housingForm?.description}
                        />
                        <Collapse
                            title="Équipements"
                            description={housingEquipments}
                        />
                    </div>
                </div>
            ) : (
                <Navigate replace to="/Error" />
            )}{" "}
        </>
    );
}
Housing.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
};
Housing.defaultProps = {
    title: "",
    location: "",
    name: "",
    picture: "",
    rating: "",
};
export default Housing;
