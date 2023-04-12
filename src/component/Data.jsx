import css from "./style.module.scss"
import { dataText } from "../Constants";
import { mediBG } from "../img";

const Data = () =>{
    return(
        <div className={css.wrap}>
            <div className={css.dataContent}>
                <main>
                    <div className={css.background}>
                        <img className={css.bg} src={mediBG} alt="background" />
                    </div>
                    <div className={css.intro}>
                        <p className={css.title}>{dataText.title}</p>
                        <p className={css.content}>{dataText.content1}</p>
                        <p className={css.content}>{dataText.content2}</p>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Data;