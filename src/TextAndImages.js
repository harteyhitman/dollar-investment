import React from 'react'


function TextAndImages(props) {
  return (
    <div className='text-and-images'>
        <div className='text-and-images-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <li>{props.link}</li>
        </div>
        <div>
            <img className='ARM' src={props.image} alt="" />
        </div>
    </div>
  )
}

export default TextAndImages