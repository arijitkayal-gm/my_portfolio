import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <p>&copy; {new Date().getFullYear()} Arijit Kayal. All rights reserved.</p>
                <p>Built with React and GSAP</p>
            </div>
            <div className='footer-links'>
                <a href="https://github.com/arijitkayal-gm" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/arijit-kayal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="" target="_blank" rel="noopener noreferrer">Email</a>
            </div>

        </div>
    )
}

export default Footer
