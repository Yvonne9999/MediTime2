import css from "./style.module.scss"

import { goalText as text } from "../Constants";
import { upperRight } from "../img";
const Goals = () =>{
    return(
        <div className={css.wrap}>
            <div className={css.goalContent}>
                <main>
                    <img className={css.upperRight} alt="" src={upperRight} />
                    <div className={css.intro}>
                    <p className={`${css.title} ${css.caseTitle}`}>{text.title}</p>
                    <p className={css.content}>{text.content}</p>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Goals;