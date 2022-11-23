import  HeaderCSS  from "./Header.module.css";
import LogoImg from "../../assets/logo.png";
import DropdownItem from './DropdownItem/DropdownItem';
import  DropdownItemCSS  from "./DropdownItem/DropdownItem.module.css";
import React, { useState } from 'react';

const Header = () => {
  const [isShown, setIsShown] = useState(false);
 
 
  function Open()
  {
   setIsShown(isShown => true)
    console.log("Open"+isShown)
  }
  function Close(){
    setIsShown(isShown => false)
    console.log("CLose"+isShown)
  }
  return (
    <div className={`${HeaderCSS.header}`}>
     <div className='flex'>
      <div className='flex flex-1 justify-around'>Anasayfa
      <div onMouseOver={Open} onMouseLeave={Close}
        className={`${HeaderCSS.productsText} relative cursor-pointer`} > <p 
       >Ürünler</p>
       {isShown && (
       <div className = {`${DropdownItemCSS.dropdownMenu}  p-8`}>
       <DropdownItem menu={isShown} />
 
       </div>
      )}
      
      
      </div>
      </div>
      <div className='flex justify-center flex-1 pb-2'>
        <img className={`${HeaderCSS.logo}`} src={LogoImg} alt="img" />
        
        </div>
      <div className='flex flex-1 justify-around'>Hakkımızda
      <div className=''> İletişim</div>
      </div>
     </div>
    </div>
  )
}

export default Header