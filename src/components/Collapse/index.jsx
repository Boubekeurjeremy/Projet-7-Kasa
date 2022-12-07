import fleche from "../../assets/fleche.png";
import PropTypes from "prop-types";
import "../../styles/css/prefixed/style.css";
import { useCollapse } from "../../Hooks/Collapse";

function Collapse({ title, description }) {
    const { open, setOpen } = useCollapse();
    return (
        <div className="kasa__collapse">
            <div className="kasa__collapse__header">
                <div className="kasa__collapse__title">{title}</div>
                <span
                    className={`kasa__collapse__fleche ${open}`}
                    onClick={() => setOpen(!open)}
                >
                    <img src={fleche} alt="Ouvrir cette liste" />
                </span>
            </div>
            {open && (
                <div className="kasa__collapse__description">{description}</div>
            )}
        </div>
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.array.isRequired,
    ]),
};
Collapse.defaultProps = {
    title: "",
    description: "",
};

export default Collapse;
