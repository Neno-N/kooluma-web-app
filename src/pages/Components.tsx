import React from 'react'
import { Button } from '../components/Button'

export const Components = () => {
  return (
    <main>
        <h1>Components</h1>
        <section>
            <h2>Buttons and Links</h2>
            <Button btnText='This is a button link' btnLink='/student' /><br />
            <Button btnText='Submit' btnType='submit' /><br />
            <a href="#" className="link-underline">This is a link</a><br />
            <a href="#" className="link">This is a link</a><br />
        </section>
    </main>
  )
}
