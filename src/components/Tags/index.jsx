import React from "react";
import "../../styles/css/prefixed/style.css";
import PropTypes from "prop-types";

function Tag({name}) {
    return(
        <span className="kasa__tag">{name}</span>
    );
}
Tag.propTypes = {
    name: PropTypes.string.isRequired,
   
};
Tag.defaultProps = {
    name: "",
   
};
export default Tag;