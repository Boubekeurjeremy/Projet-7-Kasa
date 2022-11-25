import React, { useState } from "react";
import fleche from "../../assets/fleche.png";
import PropTypes from "prop-types";
function DropDown({ title, description }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="kasa__dropdown" id={`dropdown-${title}`}>
            <div className="kasa__dropdown__header">
                <div className="kasa__dropdown__title">{title}</div>
                <span
                    className={`kasa__dropdown__fleche ${open}`}
                    onClick={() => setOpen(!open)}
                >
                    <img src={fleche} alt="Ouvrir cette liste" />
                </span>
            </div>
            {open && (
                <div className="kasa__dropdown__description">{description}</div>
            )}
        </div>
    );
}

DropDown.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
DropDown.defaultProps = {
    title: "",
    description: "",
};
export default DropDown;
