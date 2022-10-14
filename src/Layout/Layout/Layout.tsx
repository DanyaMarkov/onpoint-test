import css from "./Layout.module.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className={css.body}>
            <Header />

            <main className={css.main}>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
