import React from 'react'

interface buttonProps{
    btnText: string
    btnLink?: string
    btnTarget?: '__blank' | "__self"
    btnType?: string
}

export const Button = () => {
  return (
    <div>Button</div>
  )
}
