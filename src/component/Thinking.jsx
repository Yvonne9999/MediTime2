import css from "./style.module.scss"
import { thinkingText } from "../Constants";
import { lowerRight } from "../img";
const Thinking = () =>{
    return(
        <div className={css.wrap}>
            <div className={css.thinkingContent}>
                <div className={css.background}>
                    <img src={lowerRight} className={css.upperLeft} alt="" />
                    <img src={lowerRight} className={css.lowerRight} alt="" />
                </div>
                <main>
                <div className={css.intro}>
                        <p className={css.title}>{thinkingText.title}</p>
                        <p className={css.subtitle}>{thinkingText.subTitle}</p>
                        <p className={css.content}>{thinkingText.content1}</p>
                        <p className={css.content}>{thinkingText.content2}</p>
                        <p className={css.content}>{thinkingText.content3}</p>
                        <p className={css.content}>{thinkingText.content4}</p>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Thinking;