import React from 'react'

function UseRise(props) {
  return (
    
        <div className='testimony'>
          <p>{props.testi}</p>
          <div className='winning'>
            <img src={props.imgport} alt="" />
                <h3>{props.testname}</h3>
                </div>
        </div>
  
  )
}

export default UseRise