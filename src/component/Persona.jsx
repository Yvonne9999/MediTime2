import css from "./style.module.scss"

import { Persona as pic } from "../img";
const Persona = () =>{
    return(
        <div className={css.wrap}>
            <div className={css.personaContent}>
                <main>
                    <div className={css.intro}>
                        <p className={`${css.title} ${css.caseTitle}`}>Persona</p>
                        <img className={css.pic} src={pic} alt="persona" />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Persona;