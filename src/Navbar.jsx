import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Navbar(props) {
  return (
    <nav className='navbar'>      
      <h1>rise'</h1>
        <ul className='nav-list'>
          <li>{props.home}</li>
          <li>{props.product}</li>
          <li>{props.club}</li>
          <li>{props.about}</li>
          <li>{props.fq}</li>
          <li>{props.blog}</li>
          <li>{props.sign}</li>
        </ul>
        <Link to="/Form"><Button  text='sign up'/></Link>
    </nav>
  )
}

export default Navbar