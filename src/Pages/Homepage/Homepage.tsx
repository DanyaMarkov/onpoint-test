// import { observer } from "mobx-react-lite";
// import PinkButton from "../../components/PinkButton/PinkButton";
import css from "./Homepage.module.css";

import buttonNext from "../../assets/sprites/buttonNext.png";
import cn from "classnames";
import { useRef, useState } from "react";

// import pink1 from "../../assets/sprites/pink1.png";
// import bigBacteria from "../../assets/sprites/bigBacteria.png";

const Homepage = () => {
    let x1: any;
    let y1: any;
    const handleTouchStart = (e: any) => {
        let firstTouch = e.touches[0];
        x1 = firstTouch.clientX;
        y1 = firstTouch.clientY;
    };

    const handleTouchMove = (e: any) => {
        if (!x1 || !y1) {
            return false;
        }
        let x2 = e.touches[0].clientX;
        let difLeft = x1 - x2;
        let difRight = x2 - x1;
        // console.log(difRight);
        if (difLeft > 200) {
            swipeContent("right");
        }
        if (difRight > 200) {
            swipeContent("left");
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentPage, changePage] = useState(1);

    const swipeContent = (side: string) => {
        if (side === "right") {
            nextGo();
        }
        if (side === "left") {
            lastGo();
        }
        console.log("сработало");
    };

    const appBody = useRef<HTMLDivElement>(null);

    const nextGo = () => {
        // console.log(appBody);
        appBody?.current?.childNodes.forEach((element: any) => {
            element.style = "transform: translateX(-1024px)";
            element.background = "transform: translateX(-1024px)";
        });
    };
    const lastGo = () => {
        appBody?.current?.childNodes.forEach((element: any) => {
            element.style = "transform: translateX(0px)";
            element.background = "transform: translateX(0px)";
        });
    };
    return (
        // <div className={props.currentPage === 1 ? css.homepage : css.helppage}>
        <div className={css.appBody} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            {/* <button onClick={nextGo}>след</button>
            <button onClick={lastGo}>след</button> */}

            {/* <button onClick={() => swipeContent("right")}>СЛЕДУЮЩАЯ</button>
            <button onClick={() => swipeContent("left")}>предыдущая</button> */}
            <div className={css.appBodyTrack} ref={appBody}>
                <div className={cn(css.appBody__homepage, css.homepage)}>
                    <div className={css.homepage__hello}>ПРИВЕТ,</div>
                    <div className={css.homepage__text}>
                        <div>
                            {/* <p> */}
                            ЭТО <b> НЕ </b> КОММЕРЧЕСКОЕ ЗАДАНИЕ
                            <img src={buttonNext} alt="purple button next" onClick={() => nextGo()} />
                            {/* </p> */}
                        </div>
                        {/* <div className={css.sprites}>
                            <div className={css.sprites__pink1}>
                                <img src={pink1} alt="purple1" />
                            </div>
                            <div className={css.sprites__bigBacteria}>
                                <img className={css.animateBlock} src={bigBacteria} alt="bigBacteria" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className={cn(css.appBody__homepage, css.homepage)}>
                    <div className={css.homepage__hello}>ПРИВЕТ,</div>
                    <div className={css.homepage__text}>
                        <div>
                            ЭТО <b> НЕ </b> КОММЕРЧЕСКОЕ ЗАДАНИЕ
                            <img src={buttonNext} alt="purple button next" />
                        </div>
                    </div>

                    {/* <div className={css.sprites}>
                        <div className={css.sprites__pink1}>
                            <img src={pink1} alt="purple1" />
                        </div>
                        <div className={css.sprites__bigBacteria}>
                            <img className={css.animateBlock} src={bigBacteria} alt="bigBacteria" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Homepage;
