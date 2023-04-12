import css from "./style.module.scss"

import { product } from "../img";

const ProductDesign = () =>{
    return(
        <div className={css.wrap}>
            <div className={css.ProductDesignContent}>
                <div className={css.title}>Product Design</div>
                <img className={css.pic} src={product} alt="4 phone wireframe" />
            </div>
        </div>
    )
}

export default ProductDesign;