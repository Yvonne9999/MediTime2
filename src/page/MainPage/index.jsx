import css from "./HomePage.module.scss"

import { upperRight, lowerLeft,lowerRight,bottle,logo } from "../../img";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const MainPage = () =>{
    
    return(
        <motion.div 
            initial={{opacity : 0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            className={css.wrap}>
            <div className={css.content}>
                <img className={`${css.pic} ${css.upperR}`} src={upperRight} alt="" />
                <img className={`${css.pic} ${css.lowerL}`} src={lowerLeft} alt="" />
                <img className={`${css.pic} ${css.lowerR}`} src={lowerRight} alt="" />
                <img className={`${css.pic} ${css.logo}`} src={logo} alt="" />

                <main>
                    <div className={css.leftPart}>
                        <div className={css.title}>
                            <img className={css.bottle} src={bottle} alt="" />
                        </div>
                    </div>
                    <div className={css.rightPart}>
                        <div className={css.btn}>
                            <NavLink className={css.introBtn} to="/introduction">Introduction</NavLink>
                            <NavLink className={css.introBtn} to="/case">Case study</NavLink>
                        </div>
                    </div>
                </main>
            </div>
        </motion.div >
    )
}


export default MainPage;