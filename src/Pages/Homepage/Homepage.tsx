// import { observer } from "mobx-react-lite";
// import PinkButton from "../../components/PinkButton/PinkButton";
import css from "./Homepage.module.css";

import buttonNext from "../../assets/sprites/buttonNext.png";
import pink1 from "../../assets/sprites/pink1.png";
import bigBacteria from "../../assets/sprites/bigBacteria.png";

const Homepage = () => {
    return (
        <div className={css.homepage}>
            <div className={css.homepage__hello}>ПРИВЕТ,</div>
            <div className={css.homepage__text}>
                <div>
                    {/* <p> */}
                    ЭТО <b> НЕ </b> КОММЕРЧЕСКОЕ ЗАДАНИЕ <img src={buttonNext} alt="purple button next" />
                    {/* </p> */}
                </div>

                {/* <img src={buttonNext} alt="purple button next" /> */}
            </div>

            {/* <div className={css.homepage__pink1}>
                <img src={pink1} alt="purple1" />
            </div> */}

            <div className={css.sprites}>
                <div className={css.sprites__pink1}>
                    <img src={pink1} alt="purple1" />
                </div>
                <div className={css.sprites__bigBacteria}>
                    <img className={css.animateBlock} src={bigBacteria} alt="bigBacteria" />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
