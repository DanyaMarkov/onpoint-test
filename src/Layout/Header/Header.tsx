import css from "./Header.module.css";
// import { NavLink } from "react-router-dom";
import home from "../../assets/sprites/homeIcon.png";
import project from "../../assets/sprites/project.png";

const Header = () => {
    // <NavLink to="/">главная</NavLink>

    return (
        <header className={css.header}>
            <div className={css.header__home}>
                <img src={home} alt={"домой"} />
            </div>
            <div className={css.header__project}>
                <img src={project} alt={"project"} />
            </div>
        </header>
    );
};

export default Header;
