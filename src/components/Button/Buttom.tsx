import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
interface iButtomProps{
    buttomType: "submit" | "button" | "reset"
    style: string
    text: string
}

const buttonStyles = (style: string) =>{
    if (style === "orange"){
        return "w-40 h-12 flex items-center justify-center bg-primary-brown "
    }
}
const Button = ({buttomType, style, text}: iButtomProps) => {
  return (
    <button type={buttomType} className={buttonStyles(style)}>
        {text}
    </button>
  )
}

export default Button