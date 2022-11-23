import  HeaderCSS  from "./Header.module.css";
import LogoImg from "../../assets/logo.png";
import DropdownItem from './DropdownItem/DropdownItem';
import  DropdownItemCSS  from "./DropdownItem/DropdownItem.module.css";
import React, { useState } from 'react';

const Header = () => {
  const [isShown, setIsShown] = useState(false);
 
 
  function toggleShown()
  {
   setIsShown(isShown => !isShown)
    console.log(isShown)
  }
  return (
    <div className={`${HeaderCSS.header}`}>
     <div className='flex'>
      <div className='flex flex-1 justify-around'>Anasayfa
      <div 
        
        className='relative' > <p className="cursor-pointer" onClick={toggleShown }
       >Ürünler</p>
       {isShown && (
       <div className = {`${DropdownItemCSS.dropdownMenu}  p-8`}>
       <DropdownItem/>
 
       </div>
      )}
      
      
      </div>
      </div>
      <div className='flex justify-center flex-1'>
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