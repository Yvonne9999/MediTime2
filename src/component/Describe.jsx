import { NavLink } from "react-router-dom";

import css from "./style.module.scss"
import { describeText } from "../Constants";
import { keyboradBG,logo } from "../img";

const Describe = () =>{
    return(
        <div className={css.wrap}>
            <div className={css.describeContent}>
                <main>
                    <div className={css.intro}>
                        <p className={css.title}>{describeText.title}</p>
                        <p className={css.subtitle}>{describeText.subTitle}</p>
                        <p className={css.content}>{describeText.content1}</p>
                        <p className={css.content}>{describeText.content2}</p>
                    </div>
                    <div className={css.background}>
                        <NavLink to="/"><img className={css.logo} src={logo} alt="logo"/></NavLink>
                        <img className={css.bg} src={keyboradBG} alt=""/>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Describe;