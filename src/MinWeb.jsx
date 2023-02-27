import React from 'react'
import Button from './Button'

function MinWeb(props) {
  return (
    <div className='min-web'>
        <div>
            <p>{props.download}</p>
            <h2>{props.longtext}</h2>
            <p>{props.investment}</p>
            <div className="google-button">
            <Button text='download App'/>
            <Button text='Sign up'/>
            </div>
        </div>
        <div className='min-web-img'>
            <img src="https://risevest.com/_next/static/media/rise-app-phone.c7dc0912.webp" alt="" />
        </div>
    </div>
  )
}

export default MinWeb