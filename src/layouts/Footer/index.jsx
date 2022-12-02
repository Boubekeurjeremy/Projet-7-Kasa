import "../../styles/css/prefixed/style.css";
import LOGO from "../../assets/LOGO-FOOTER.png";
import copyright from "../../assets/copyright.png";
function Footer() {
    return (
        <div className="kasa__footer">
            <div className="kasa__footer__bloc">
                <img
                    src={LOGO}
                    alt="Logo Kasa"
                    className="kasa__footer__logo"
                />
                <h1 className="kasa__footer__info">
                    {" "}
                    <img
                        src={copyright}
                        alt="Logo copyright"
                        className="kasa__footer__copyright"
                    />
                    2020 Kasa. All rights reserved
                </h1>
            </div>
        </div>
    );
}

export default Footer;
