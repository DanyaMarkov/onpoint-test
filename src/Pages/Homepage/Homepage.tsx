// import { observer } from "mobx-react-lite";
// import PinkButton from "../../components/PinkButton/PinkButton";
import css from "./Homepage.module.css";

import buttonNext from "../../assets/sprites/buttonNext.png";
import pink1 from "../../assets/sprites/pink1.png";
import bigBacteria from "../../assets/sprites/bigBacteria.png";
// import classNames from "classnames";

const Homepage = (props: any) => {
    // const setActive = ({ isActive: any }) => (isActive ? css.profileActive : css.profileInactive);

    // const homepage = document.querySelector(".home");
    // document.querySelector(".homepage")?.addEventListener('click', function() {

    //     homepage.style.left = "-1024px"
    // })
    return (
        <div className={props.currentPage === 1 ? css.homepage : css.helppage}>
            {/* <div className={css.homepage + "home"}> */}
            <div className={css.homepage__hello}>ПРИВЕТ,</div>
            <div className={css.homepage__text}>
                <div>
                    {/* <p> */}
                    ЭТО <b> НЕ </b> КОММЕРЧЕСКОЕ ЗАДАНИЕ
                    <img src={buttonNext} alt="purple button next" />
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
