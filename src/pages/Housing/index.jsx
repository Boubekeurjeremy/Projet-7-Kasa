import React from "react";
import { useParams } from "react-router-dom";
import { housingList } from "../../datas/housingList";
import "../../styles/style.css";
import Carrousel from "../../Hooks/Carrousel";

function Housing() {
    const id = useParams();
    const housingForm = housingList.find((housing) => housing.id === id.id);

    return (
        <div className="kasa__housing">
            <Carrousel images={housingForm?.pictures} />
        </div>
    );
}

export default Housing;
