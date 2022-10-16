import css from "./Layout.module.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import { Outlet } from "react-router-dom";
// import { useState } from "react";
import Homepage from "../../Pages/Homepage/Homepage";

import { useState } from "react";
// import { useRef } from "react";
import Message from "../../Pages/Message/Message";
import cn from "classnames";
import KeyMessage from "../../Pages/KeyMessage/KeyMessage";

const Layout = () => {
    //Проверка при свайпе

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

    //Храним состояние текущей страницы, при свайпе меняем страницу
    const [currentPage, changePageNumber] = useState(1);
    const numberOfPages = 3;

    const swipeContent = (side: string) => {
        if ((currentPage > 1 && side === "left") || (currentPage < numberOfPages && side === "right")) {
            switch (side) {
                case "right":
                    changePage(currentPage + 1);
                    break;
                case "left":
                    changePage(currentPage - 1);
                    break;
            }
        }
    };

    // const body = <HTMLDivElement>(null)

    // const body = useRef<HTMLDivElement>(null);

    const changePage = (numberOfPage: number) => {
        changePageNumber(numberOfPage);
        // body.current.id = "1";
        // body.current.style["background-image"] =
        // body.current?.style.backgroundImage = url(../../assets/background/backgroundMessage.png);
    };

    return (
        <div
            // ref={body}
            className={cn(css.body, currentPage === 1 ? css.back1 : currentPage === 2 ? css.back2 : css.back3)}
        >
            <Header changePage={changePage} />

            <main className={css.main} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                {currentPage === 1 ? <Homepage changePage={changePage} /> : null}
                {currentPage === 2 ? <Message changePage={changePage} /> : null}
                {currentPage === 3 ? <KeyMessage changePage={changePage} /> : null}
                {/* {currentPage === 1 ? <Homepage changePage={changePage} /> : null} */}
                {/* <Outlet currentPage={currentPage}/> */}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
