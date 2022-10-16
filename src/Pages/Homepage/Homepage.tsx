import css from "./Homepage.module.css";

import buttonNext from "../../assets/sprites/buttonNext.png";
// import cn from "classnames";

import pink1 from "../../assets/sprites/pink1.png";
import bigBacteria from "../../assets/sprites/bigBacteria.png";
import spikyBacteria from "../../assets/sprites/spikyBacteria.png";
import smallBacteria from "../../assets/sprites/smallBacteria.png";
import tinyBacteria from "../../assets/sprites/tinyBacteria.png";

const Homepage = (props: any) => {
    return (
        // <div className={props.currentPage === 1 ? css.homepage : css.helppage}>

        <div className={css.homepage}>
            <div className={css.homepage__hello}>ПРИВЕТ,</div>
            <div className={css.homepage__text}>
                <div>
                    ЭТО <b> НЕ </b> КОММЕРЧЕСКОЕ ЗАДАНИЕ
                    <img src={buttonNext} alt="purple button next" onClick={() => props.changePage(2)} />
                </div>
                <div className={css.sprites}>
                    <div className={css.sprites__pink1}>
                        <img src={pink1} alt="purple1" />
                    </div>
                    <div className={css.sprites__bigBacteria}>
                        <img className={css.animateBlock} src={bigBacteria} alt="bigBacteria" />
                    </div>
                    <div className={css.sprites__tinyBacteria}>
                        <img className={css.animateBlock} src={tinyBacteria} alt="tinyBacteria" />
                    </div>
                    <div className={css.sprites__smallBacteria}>
                        <img className={css.animateBlock} src={smallBacteria} alt="smallBacteria1" />
                    </div>
                    <div className={css.sprites__spikyBacteria}>
                        <img className={css.animateBlock} src={spikyBacteria} alt="spikyBacteria" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
