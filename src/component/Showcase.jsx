import css from "./style.module.scss"

//import { prototype } from "../img";
import { ptototypeLink } from "../Constants";
import ReactPlayer from 'react-player'
import "video-react/dist/video-react.css";

import { video } from "../video";

const Showcase = ({page}) =>{
    let bg = page === "case" ? {backgroundColor : "#b9d6e8"} : {};
    return(
        <div className={css.wrap}>
            <div style={bg} className={css.showcaseContent}>
                <div className={css.titlePart}><p className={css.title}>Showcase</p></div>
                <div className={css.video}>
                <ReactPlayer height={700} width={1000} url={video } playing={true} muted={true}/>
                </div>
                <div className={css.link}><span>Link of Prototype: </span><a href={ptototypeLink}>click Me !</a></div>
            </div>
        </div>
    )
}

export default Showcase;