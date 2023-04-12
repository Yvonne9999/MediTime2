import css from "./style.module.scss"

import { userFlow as pic , lowerLeft} from "../img";
const Userflow = () =>{
    return(
        <div className={css.wrap}>
            <div className={css.userFlowContent}>
                <main>
                    <img src={lowerLeft} className={css.lowerLeft} alt="" />
                    <div className={css.intro}>
                        <p className={`${css.title} ${css.caseTitle}`}>User flow</p>
                        <img className={css.pic} src={pic} alt="persona" />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Userflow;