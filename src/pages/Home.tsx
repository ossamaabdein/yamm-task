import '../styles/homepage/Home.scss'
import React from 'react'
import { yammLogo } from '../utils/icons'

const Home = () => {
  return (
    <div className='homepage'>
      <div className='intro'>
        <div className='logo'>
          {yammLogo}
        </div>
        <h1>Welcome to Yamm Admin Panel</h1>
        <p>Let's help our customers and make their shopping experience easier.</p>
      </div>
    </div>
  )
}

export default Home