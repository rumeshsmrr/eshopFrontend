// src/components/Hero.js
import React from 'react';
import './Hero.css';
import SocialMediaButton from './SocialMediaButton';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaStar } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
const socialmedia = [
  {
    id: 1,
    icon: <FaFacebook />,
    link:"https://web.facebook.com/",
  },
  {
    id: 2,
    icon: <FaTwitter />,
    link:"https://web.facebook.com/",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    link:"https://web.facebook.com/",
  },
  {
    id: 4,
    icon: <FaLinkedin />,
    link:"https://web.facebook.com/",
  },
];

const tags = [
  {
    id: 1,
    tag: 'Shirts',
  },
  {
    id: 2,
    tag: 'Trousers',
  },
  {
    id: 3,
    tag: 'T-Shirts',
  },
  {
    id: 4,
    tag: 'Shorts',
  },
];

const Hero = () => {
  return (
    <>
    <section className="hero-section ">
      <div className='socialMediaIconContainer'>
       
      {socialmedia.map((social) => (
        <SocialMediaButton key={social.id} icon={social.icon} link={social.link}/>
      ))}
      </div>

      <div className='tagContainer'>
{
  tags.map((tag) => (
    <div key={tag.id} className='tag'>{tag.tag}</div>
  ))
}
</div>
<div className='midSection'>
<div className='largeTitle'>
Shop Our Latest Arrivals and For the Perfect Outfit For Occasions.
<span className='imageCard'></span>

            </div>
            <div className='shoppingBtn'>
              <div className='shopBtn'>Shop Now</div>
              <IoArrowDownCircleOutline className='arrowIcon2'/>
            </div>
            <div className='infoCard'>
              <div className='ratingContainer'>
                <div className='ratingPart1'>
                <div className='rating'> 4.8</div>
                <span className='ratedNumber'>[400]</span>
                </div>
                <div className='start'><FaStar className='staricon'/></div>
              </div>
              <div className='imageContainer'>
                <IoArrowDownCircleOutline className='arrowIcon'/>
              </div>
            </div>
            </div>
      
      <div className='shape1'>
            <div id="curved-corner-topleft"></div>
            </div>
            <div className='shape2'>
            <div id="curved-corner-topright"></div>
            </div>
            
    </section>
    </>
  );
};

export default Hero;
