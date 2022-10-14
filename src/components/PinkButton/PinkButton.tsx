// import { observer } from "mobx-react-lite";
import css from "./PinkButton.module.css";

const PinkButton = (props: any) => {
    return (
        <div className={css.button}>
            <div className={css.button__circle}>→</div>
            <div className={css.homepage__text}>{props.buttonText} </div>
            <div></div>
        </div>
    );
};

export default PinkButton;
