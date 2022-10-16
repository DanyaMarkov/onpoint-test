import css from "./Layout.module.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import { Outlet } from "react-router-dom";
// import { useState } from "react";
import Homepage from "../../Pages/Homepage/Homepage";
import pink1 from "../../assets/sprites/pink1.png";
import bigBacteria from "../../assets/sprites/bigBacteria.png";

const Layout = () => {
    // let x1: any;
    // let y1: any;
    // const handleTouchStart = (e: any) => {
    //     let firstTouch = e.touches[0];
    //     x1 = firstTouch.clientX;
    //     y1 = firstTouch.clientY;
    // };

    // const handleTouchMove = (e: any) => {
    //     if (!x1 || !y1) {
    //         return false;
    //     }
    //     let x2 = e.touches[0].clientX;
    //     let difLeft = x1 - x2;
    //     let difRight = x2 - x1;
    //     // console.log(difRight);
    //     if (difLeft > 200) {
    //         swipeContent("right");
    //     }
    //     if (difRight > 200) {
    //         swipeContent("left");
    //     }
    // };

    return (
        <div className={css.body}>
            <Header />

            <main className={css.main}>
                <Homepage />
                {/* <Outlet currentPage={currentPage}/> */}
            </main>

            <Footer />

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

export default Layout;
