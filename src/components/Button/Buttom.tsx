import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
interface iButtomProps{
    buttomType: "submit" | "button" | "reset"
    style: "orange" | "white" | "arrow"
    buttonText: string
}

const buttonStyles = (style: string) =>{
    if (style === "orange"){
        return "w-40 h-12 flex items-center text-primary-white justify-center bg-primary-brown hover:bg-primary-skin"
    }
    if (style === "white"){
        return "w-40 h-12 flex items-center text-primary-black justify-center bg-primary-white hover:bg-primary-black"
    }
    if (style === "arrow"){
      return "w-40 h-12 flex items-center text-primary-black justify-center bg-primary-white hover:bg-primary-black"
  }
}
const Button = ({buttomType, style, buttonText}: iButtomProps) => {
  return (
    <button type={buttomType} className={buttonStyles(style)}>
        {buttonText}
    </button>
  )
}

export default Button