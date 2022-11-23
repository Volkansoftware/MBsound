import React from 'react'
import  ProductCSS  from "./Product.module.css";
import BossImg from "../../assets/gorseller/gorsel1.png";
const Product = () => {
  return (
    <div>
    <div className={`${ProductCSS.background} flex text-white p-8`}>
         
        <div className={`${ProductCSS.desc} flex items-center justify-center flex-col `}>
        <div>Risus commodo id odio turpis pharetra elementum. 
          Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus,
           eros consequat magna semper orci a tincidunt.</div>
           <div className='buttons mt-8 items-center  '>
            <button className={`${ProductCSS.button} justify-center flex items-center  mr-64`} type='button'><div></div>İncele</button>
            
            </div> 
        </div>
        
        <div className={`${ProductCSS.imgDiv} flex items-center ml-44 `}>
        <div> <img  className={`${ProductCSS.imgSrc}`}  src={BossImg} alt="img" /></div>
        </div>
    </div>
    </div>
  )
}

export default Product