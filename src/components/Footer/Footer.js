import React from 'react'
import LogoImg from "../../assets/logo.png";
import KonumImg from "../../assets/iconlar/konum.png";
import MailImg from "../../assets/iconlar/mail.png";
import TelefonImg from "../../assets/iconlar/telefon.png";
import  FooterCSS  from "../Footer/Footer.module.css";
import Contact from './Contact/Contact';
const Footer = () => {
  return (
    <div>
        <div className={`${FooterCSS.footer} p-4 p-x-4 flex`}>
            <div className='flex flex-1 ml-8 items-center'>
            <img  className='w-1/4 h-1/2' src={LogoImg} alt="img" />
           
            </div>
           <div className=' flex flex-1 flex-col'>
           <Contact src={KonumImg} place={"İstoç 15. Ada No:1-3, 5/7. Sk. Bağcılar/İstanbul"} />
           <Contact src={TelefonImg} place={"+90 212 659 63 20"} />
           <Contact src={MailImg} place={"info@mbsound.com.tr"} />
           </div>
        </div>

    </div>
  )
}

export default Footer