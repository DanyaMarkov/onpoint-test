import css from "./Message.module.css";

// import spikyBacteria from "../../assets/sprites/spikyBacteria.png";
import cn from "classnames";

const Message = (props: any) => {
    return (
        // <div className={props.currentPage === 1 ? css.homepage : css.helppage}>

        <div className={css.message}>
            <div className={css.message__header}>
                ТЕКСТ <br /> СООБЩЕНИЯ
            </div>
            <div className={cn(css.message__text, css.text)}>
                <div className={css.text__content}>
                    <div className={css.text__content_text}>
                        <p>
                            <b>Lorem ipsum dolor sit amet </b>, Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quas, distinctio suscipit officia odit itaque doloribus non pariatur, nulla ex inventore
                            assumenda et velit maiores iste rerum vel quam illum laudantium eligendi accusamus quaerat
                            in vitae perspiciatis? Alias quis voluptatibus corporis ea reiciendis iure impedit
                            dignissimos. Fugit, voluptate a! Iste deleniti aperiam rerum at dolores, quis aut architecto
                            laudantium facilis laborum, repellendus nemo! Hic eos placeat accusamus asperiores, iste
                            quaerat? Totam amet quo laboriosam. Doloribus vitae quae esse consectetur minima iure, eos
                            ut reiciendis aut provident? Voluptatem neque, repellat inventore consequatur enim cum
                            excepturi, cumque quos, ex ea ratione voluptatum consectetur aspernatur consequuntur.
                            Perferendis, rem debitis. Perspiciatis porro, unde ex magnam iusto ducimus quisquam quam
                            molestiae ea dolore esse nobis, totam, quis quod velit repudiandae dignissimos cumque
                            laborum explicabo nesciunt? Alias quis voluptatibus corporis ea reiciendis iure impedit
                            dignissimos. Fugit, voluptate a! Iste deleniti aperiam rerum at dolores, quis aut architecto
                            laudantium facilis laborum, repellendus nemo! Hic eos placeat accusamus asperiores, iste
                            quaerat? Totam amet quo laboriosam. Doloribus vitae quae esse consectetur minima iure, eos
                            ut reiciendis aut provident? Voluptatem neque, repellat inventore consequatur enim cum
                            excepturi, cumque quos, ex ea ratione voluptatum consectetur aspernatur consequuntur.
                            Perferendis, rem debitis. Perspiciatis porro, unde ex magnam iusto ducimus quisquam quam
                            molestiae ea dolore esse nobis, totam, quis quod velit repudiandae dignissimos cumque
                            laborum explicabo nesciunt?
                        </p>
                    </div>
                </div>
                {/* <div className={css.sprites}>
                    <div className={css.sprites__spikyBacteria}>
                        <img className={css.animateBlock} src={spikyBacteria} alt="spikyBacteria" />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Message;
