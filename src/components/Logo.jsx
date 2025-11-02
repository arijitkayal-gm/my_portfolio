import React from 'react'

const Logo = ({logo}) => {
  return (
    <div className='logo-container'>
        <svg viewBox='0 0 1500 600'preserveAspectRatio="xMidYMid meet">
            <text x="50%" y="50%" dy=".32em" textAnchor='middle' className='text-logo'>
                {logo}
            </text>
            
        </svg>
      
    </div>
  )
}

export default Logo
