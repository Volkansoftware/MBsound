import React from 'react'
import HoparlerImg from "../../../assets/iconlar/hoparler.png";
import MidrangeImg from "../../../assets/iconlar/midrange.png";
import TweeterImg from "../../../assets/iconlar/tweeter.png";
import KabinImg from "../../../assets/iconlar/kabin.png";
import AksesuarImg from "../../../assets/iconlar/aksesuar.png";
import KabloImg from "../../../assets/iconlar/kablo.png";
import AmplifikatorImg from "../../../assets/iconlar/amplifikator.png";
import  DropdownItemCSS  from "./DropdownItem.module.css";
const DropdownItem = ({menu}) => {
  console.log("menu"+menu)
  {
  if(menu)
    {
     return (
      <div>
 
    <div className = {`flex p-4`}>
    
    <div className='flex-1 flex justify-around'>
        <div className='flex justify-center items-center '>
             <img  className={`${DropdownItemCSS.logo} mx-2`} src={HoparlerImg} alt="img" />
             <div className={`${DropdownItemCSS.item} mx-2`}>Hoparlör</div>
             </div>
             <div className='flex justify-center items-center '>
             <img  className={`${DropdownItemCSS.logo} mx-2`} src={MidrangeImg} alt="img" />
             <div className={`${DropdownItemCSS.item} mx-2`} >Midrange</div>
             </div>
             <div className='flex justify-center items-center '>
             <img  className={`${DropdownItemCSS.logo} mx-2`} src={AmplifikatorImg} alt="img" />
             <div className={`${DropdownItemCSS.item} mx-2`}>Midrange</div>
             </div>
        <div>asdasd</div>
    </div>
    </div>
  
    <div className='mt-4 border border-sky-500 border-black w-1/2 m-auto '>

</div>
  
    <div className = {`flex p-4 mt-8`}>
    <div className='flex-1 flex justify-around'>
        <div className='flex justify-center items-center '>
             <img  className={`${DropdownItemCSS.logo} mx-2`} src={TweeterImg} alt="img" />
             <div className={`${DropdownItemCSS.item} mx-2`}>Tweeter</div>
             </div>
             <div className='flex justify-center items-center '>
             <img  className={`${DropdownItemCSS.logo} mx-2`} src={KabinImg} alt="img" />
             <div className={`${DropdownItemCSS.item} mx-2`}>Kabin</div>
             </div>
             <div className='flex justify-center items-center '>
             <img  className={`${DropdownItemCSS.logo} mx-2`} src={AksesuarImg} alt="img" />
             <div className={`${DropdownItemCSS.item} mx-2`}>Aksesuar</div>
             </div>
             <div className='flex justify-center items-center '>
             <img  className={`${DropdownItemCSS.logo} mx-2`} src={KabloImg} alt="img" />
             <div className={`${DropdownItemCSS.item} mx-2`}>Kablo</div>
             </div>
    </div>
    </div>

 <div> asdasdas</div>

    </div>

     )
    }}

}

export default DropdownItem