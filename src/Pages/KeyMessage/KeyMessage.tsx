import css from "./KeyMessage.module.css";

import bottle from "../../assets/sprites/bottle.png";
import cn from "classnames";
import buttonInfo from "../../assets/sprites/buttonInfo.png";
import plate from "../../assets/sprites/plate.png";
import calendar from "../../assets/sprites/calendar.png";

const KeyMessage = (props: any) => {
    return (
        // <div className={props.currentPage === 1 ? css.homepage : css.helppage}>

        <div className={css.keyMessage}>
            <div className={css.keyMessage__title}>
                <h4>КЛЮЧЕВОЕ СООБЩЕНИЕ</h4>
                <h2>
                    BREND <b> XY</b>
                </h2>
            </div>
            <div className={cn(css.keyMessage__inner, css.inner)}>
                <div className={cn(css.inner__card1, css.card)}>
                    <div className={css.card__icon}>
                        <img src={plate} alt="plate" />
                    </div>
                    <div className={css.card__text}>
                        <p>
                            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus
                            ultricies
                        </p>
                    </div>
                </div>
                <div className={cn(css.inner__card2, css.card)}>
                    <div className={css.card__icon}>
                        <img src={calendar} alt="calendar" />
                    </div>
                    <div className={css.card__text}>
                        <p>A arcu cursus vitae</p>
                    </div>
                </div>
                <div className={css.inner__button}>
                    <img src={buttonInfo} alt="purple button info" onClick={() => props.changePage(2)} />
                </div>

                <div className={css.sprites}>
                    <div className={css.sprites__bottle}>
                        <img src={bottle} alt="bottle" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyMessage;
