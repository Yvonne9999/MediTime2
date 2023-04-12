import css from "./style.module.scss"

import { researchText as text } from "../Constants";
import { lowerRight } from "../img";
const Goals = () =>{
    return(
        <div className={css.wrap}>
            <div className={css.researchContent}>
                <main>
                    <img className={css.lowerRight} alt="" src={lowerRight} />
                    <div className={css.intro}>
                        <p className={`${css.title} ${css.caseTitle}`}>{text.title}</p>
                        <div className={css.researchResult}>
                            <p className={css.secondayTitle}>{text.secondayTitle}</p>
                            <div className={css.question}>
                                <ol>
                                    <li>
                                        <p className={css.question}> {text.question1.question}</p>
                                        <ul>
                                            <li>{text.question1.answer.li1}</li>
                                            <li>{text.question1.answer.li2}</li>
                                            <li>{text.question1.answer.li3}</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p className={css.question}>{text.question1.question}</p>
                                        <p>{text.question2.answer.main}</p>
                                        <ul>
                                            <li>{text.question2.answer.li1}</li>
                                            <li>{text.question2.answer.li2}</li>
                                        </ul>
                                    </li>
                                </ol>
                                
                            </div>

                            <p className={css.secondayTitle}>{text.thirdTitle}</p>
                            <ol>
                                <li>{text.research1}</li>
                                <li>{text.research2}</li>
                            </ol>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Goals;