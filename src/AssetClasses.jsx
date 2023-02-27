import React from 'react'

function AssetClasses(props) {
  return (
    <div className='flex'>
      
        <div className='asset-classes'>
        <div className="top-div"></div>
            <img className='inside-img' src={props.pics} alt="" />
            <h2>{props.text1}</h2>
            <p>{props.text2}</p>
            <p className='gray-text'>{props.desc1}</p>
            <p className='gray-text'>{props.desc2}</p>
            <p>{props.learn}</p>
        </div>
    </div>

  )
}

export default AssetClasses