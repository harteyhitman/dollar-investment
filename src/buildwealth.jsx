import React from 'react'
import Button from './Button'

function buildwealth(props) {
  return (
    <div className='build-wealth'>
        <div className='build-wealth-img'>
            <img src="https://risevest.com/_next/static/media/build-wealth-phone.b70d50a3.webp" alt="" />
        </div>
        <div className='build-wealth-img-text'>
            <h3>{props.first}</h3>
            <h1 className='future'>{props.second} future</h1>
            <p>{props.third}</p>
            <Button  text={props.fourth}/>
        </div>
    </div>
  )
}

export default buildwealth