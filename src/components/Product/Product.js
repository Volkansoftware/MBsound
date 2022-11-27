import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  ProductCSS  from "./Product.module.css";
import BossImg from "../../assets/gorseller/gorsel1.png";
import SlideTwo from "../../assets/gorseller/gorsel2.png";
const Product = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div 
        style={{
          bottom: 20,
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
         width: "100vw",
        }}
      >
       
        <ul style={{ 
          margin: "10px",
          width:"65px",
          
          }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "10px",
          height: "10px",
         borderRadius: "50%",
          color: "purple",
          backgroundColor: "red",
        }}
      >
       
      </div>
    )
  }
  return (
   

        
        <Slider className={`${ProductCSS.slider} `} {...settings}>
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
          <div>
          <div className={`${ProductCSS.backgroundSlider} flex text-white p-8`}>
         
         <div className={`${ProductCSS.desc} flex items-center justify-center flex-col `}>
         <div>Risus commodo id odio turpis pharetra elementum. 
           Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus,
            eros consequat magna semper orci a tincidunt.</div>
            <div className='buttons mt-8 items-center  '>
             <button className={`${ProductCSS.button} justify-center flex items-center  mr-64`} type='button'><div></div>İncele</button>
             
             </div> 
         </div>
         
         <div className={`${ProductCSS.imgDivTwo} flex items-center ml-44 `}>
         <div> <img  className={`${ProductCSS.imgSrc}`}  src={SlideTwo} alt="img" /></div>
         </div>
     </div> 
            
          </div>
          
        </Slider>
     


   
  )
}

export default Product