import css from "./style.module.scss"

import { prototype as pic} from "../img";
const Prototype = () =>{
    return(
        <div className={css.wrap}>
            <div className={css.prototypeContent}>
                <main>
                    <div className={css.intro}>
                        <p className={`${css.title}`}>Prototype</p>
                        <img className={css.pic} src={pic} alt="persona" />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Prototype;