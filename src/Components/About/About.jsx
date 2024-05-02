import React from 'react'
import './About.css'
// import about_img from '../../assets/about.png'
// import about_img from '../../assets/Nadeen.jpg'
// import about_img from '../../assets/titoo.png'
// import play_icon from '../../assets/play-icon.png'
import { assets } from '../Assets/All_image'

// const About = ({setPlayState}) => {
  const About = ({setPlayState}) => {
  return (
    <div className='about' id='about'>
      <div className='about-left'>
        <img src={assets.titoo} alt=''className='about-img' />
        <img src={assets.play_icon} alt='' className='play-icon' onClick={()=>{
          setPlayState(true)
        }}/>
      </div>
      <div className='about-right'>

      <h3>Happy Bearth Day </h3>
        
        <h2>Fathi Mohamed Fathi</h2>
        <hr />
        
        {/* <p>Embark on a transformative educational jpurney wiht our university's comprehensive education program. Our cutting-edge curriculum is designed to empower students with knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <p>With the focus of innovation, hands-on learning, and personalized mentroship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <p>Whether you aspire to become a teacher, adminstrator, counselor, or educational leader , our divers range of programs offers the perfect pathway tp acheive your goals and unlock your full potenial in shaping the future of education.</p> */}

      </div>
    </div>
  )
}

export default About