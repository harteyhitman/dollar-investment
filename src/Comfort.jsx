import React from 'react'

function Comfort(props) {
  return (
    <div className='comfort'>
        <h1>{props.comfort}</h1>
        <p>{props.comfortText}</p>
    </div>
  )
}

export default Comfort