import css from "./style.module.scss"
import { coreFuncText } from "../Constants";
import { lowerRight } from "../img";

const CoreFunc = () =>{
    return(
        <div className={css.wrap}>
            <div className={css.coreFunc}>
                <main>
                    <p className={css.pagetitle}>Core Functions</p>
                    <div className={css.cont}>
                        {coreFuncText.map((text,index)=>(
                            <div key={index} className={`${css.card} ${css.intro}`}>
                                <div className={css.icon}><img className={css.icon} src={lowerRight} alt="" /></div>
                                <p className={css.title}>{text.title}</p>
                                <p className={css.content}>{text.content}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default CoreFunc;