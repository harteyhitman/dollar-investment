import React from 'react'


function HomePageText(props) {
  return (
    <div className='home-text'>
        <h1 >{props.header}</h1>
        <p>{props.paragraph}</p>
    </div>
  )
}

export default HomePageText