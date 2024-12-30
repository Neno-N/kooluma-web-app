import React from 'react'

interface buttonProps{
    btnText: string
    btnLink?: string
    btnTarget?: '_blank' | "_self"
    btnType?: 'button' | 'submit' | 'reset'
    extraClass?: string
    onClick?: any
}

export const Button = ({btnLink, btnTarget, btnText, btnType, extraClass, onClick}: buttonProps) => {
  const defaultOnClick = () => {
    console.log(btnText + ' was clicked')
  }
  return (
    <>
      {
        btnLink ?
        <a className={`ai-btn ${extraClass ? extraClass : ''}`} target={btnTarget ? btnTarget : '_self'} href={btnLink}>
          {btnText}
        </a> :
        <button className={`ai-btn ${extraClass ? extraClass : ''}`} type={btnType ? btnType : 'button'} onClick={onClick ? onClick : defaultOnClick}>
          {btnText}
        </button>
      }
    </>
  )
}
