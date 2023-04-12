import css from "./style.module.scss"

import { userJourney as pic , upperRight} from "../img";
const UserJourney = () =>{
    return(
        <div className={css.wrap}>
            <div className={`${css.userFlowContent} ${css.userJourneyContent}`}>
                <main>
                    <img src={upperRight} className={css.upperRight} alt="" />
                    <div className={css.intro}>
                        <p className={`${css.title} ${css.caseTitle}`}>User Journey Map</p>
                        <img className={css.pic} src={pic} alt="persona" />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default UserJourney;