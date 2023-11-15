import React from 'react'
import arrow from "../../assets/imgs/arrow.png"
import Image from 'next/image'
interface iButtomProps{
    buttomType: "submit" | "button" | "reset"
    style: "brown" | "white" | "arrow"
    buttonText: string
}



const buttonStyles = (style: string) =>{
    if (style === "brown"){
        return "w-40 h-12 transition tracking-widest font-bold flex items-center text-primary-white justify-center bg-primary-brown hover:bg-primary-skin"
    }
    if (style === "white"){
        return "w-40 h-12 transition tracking-widest border border-black font-bold flex items-center text-primary-black justify-center bg-primary-white hover:bg-primary-black hover:text-white"
    }
    if (style === "arrow"){
      return "w-40 h-12 flex transition items-center text-primary-black justify-center bg-primary-white hover:text-primary-brown"
  }
}
const Button = ({buttomType, style, buttonText}: iButtomProps) => {
  return (
    <button type={buttomType} className={buttonStyles(style)}>
        {buttonText} {style === "arrow" ? <Image src={arrow} className='ml-4' alt='Go see this!'/> : ''}
    </button>
  )
}

export default Button