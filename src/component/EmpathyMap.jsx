import css from "./style.module.scss"

import { empathy as pic } from "../img";
const Empathy = () =>{
    return(
        <div className={css.wrap}>
            <div className={css.empathyContent}>
                <main>
                    <div className={css.intro}>
                        <p className={`${css.title} ${css.caseTitle}`}>Empathy Map</p>
                        <img className={css.pic} src={pic} alt="persona" />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Empathy;