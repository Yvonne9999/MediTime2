import css from "./style.module.scss"
import { NavLink } from "react-router-dom";
import { arrow } from "../img";

const EndingPage = () =>{
    return(
        <div className={css.wrap}>              
            <div className={css.endingPart}>
                <main>
                    <p className={css.bye1}>Thanks for your time :）</p>
                    <p className={css.bye2}>Feel free to leave a comment. Would love to know feedback!</p>
                    <NavLink to="/"><img className={css.pic} src={arrow} alt="back to mainpage"/></NavLink>
                </main>
            </div>
        </div>
    )
}

export default EndingPage;