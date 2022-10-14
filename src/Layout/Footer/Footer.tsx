import css from "./Footer.module.css";

import onpoint from "../../assets/sprites/onpoint.png";

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.footer__onpoint}>
                <img src={onpoint} alt={"onpoint"} />
            </div>
        </footer>
    );
};

export default Footer;
