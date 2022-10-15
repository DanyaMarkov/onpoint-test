import css from "./Layout.module.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import { Outlet } from "react-router-dom";
import { useState } from "react";
import Homepage from "../../Pages/Homepage/Homepage";

const Layout = () => {
    let x1: any;
    let y1: any;
    const handleTouchStart = (e: any) => {
        let firstTouch = e.touches[0];
        // console.log(firstTouch);

        x1 = firstTouch.clientX;
        y1 = firstTouch.clientY;
        // console.log(x1, y1);
    };

    const handleTouchMove = (e: any) => {
        if (!x1 || !y1) {
            return false;
        }

        let x2 = e.touches[0].clientX;
        // let y2 = e.touches[0].clientX;
        // console.log(x2, y2);

        let difLeft = x1 - x2;
        let difRight = x2 - x1;

        console.log(difRight);
        if (difLeft > 200) {
            swipeContent("right");
        }
        if (difRight > 200) {
            swipeContent("left");
        }
    };

    const [currentPage, changePage] = useState(1);

    const swipeContent = (side: string) => {
        if (side === "right") {
            changePage(2);
        }
        if (side === "left") {
            changePage(1);
        }
    };

    return (
        <div className={css.body}>
            <Header />

            <main className={css.main} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                <Homepage currentPage={currentPage} />
                {/* <Outlet currentPage={currentPage}/> */}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
