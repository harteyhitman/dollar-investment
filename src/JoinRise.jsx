import React from 'react'
import Button from './Button'

function JoinRise(props) {
  return (
    <div className='join-rise'>
        <div className='join-rise-text'>
            <h1>{props.joincommunity}</h1>
            <p>{props.jointext}</p>
            <Button text='Join Our Community'/>
        </div>
        <div className='join-rise-img'>
            <img src="https://risevest.com/_next/static/media/rise-community.bac1270e.webp" alt="" />
        </div>
    </div>
  )
}

export default JoinRise