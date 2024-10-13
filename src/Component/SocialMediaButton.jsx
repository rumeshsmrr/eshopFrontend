import React from 'react'
import './socialMediaButton.css'
import propTypes from 'prop-types'

export default function SocialMediaButton(reactIcon, link) {

    console.log(reactIcon)
    console.log(link)
  return (
    <>
    <a href={reactIcon.link}>
    <div className='socialMediaBtn'>
        {reactIcon.icon}
    </div></a>
    </>
  )
}

SocialMediaButton.propTypes = {
    reactIcon: propTypes.object.isRequired,
    link: propTypes.string.isRequired

}    

