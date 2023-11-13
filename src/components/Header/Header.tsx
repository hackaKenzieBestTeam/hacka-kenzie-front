import React from 'react'
import { headerText } from './headerInfo'

const Header = () => {
  return (
    <header className='w-full h-[700px]'>
        <div>
            {/* colocar aqui o logo, a navBar e o Carrinho */}
        </div>
        <div className="w-full border border-neutral-600"></div>
        <div className='w-1/2 h-auto space-y-5'>
            <p>{headerText.title}</p>
            <p>{headerText.productName}</p>
            <p>{headerText.productDescription}</p>
        </div>
    </header>
  )
}

export default Header