import css from "./style.module.scss"

import { statmentText as text } from "../Constants";
import { lowerLeft } from "../img";
const Statement = () =>{
    return(
        <div className={css.wrap}>
            <div className={css.statementContent}>
                <main>
                    <img className={css.lowerLeft} alt="" src={lowerLeft} />
                    <div className={css.intro}>
                    <p className={`${css.title} ${css.caseTitle}`}>{text.title}</p>
                    <p className={css.content}>{text.content}</p>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Statement;