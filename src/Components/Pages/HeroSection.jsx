import React from 'react'
import Navbar from '../ComponentsUtility/Navbar'
import HeroHomeText from '../HomePage/HeroHomeText'
import Features from '../HomePage/HomeFeatures/Features'
import MasterTechSub from '../HomePage/MasterTechnicalSubjects/MasterTechSub'
import MasterComSpec from '../HomePage/Company-Specific/MasterComSpec'
import Footer from '../ComponentsUtility/Footer' 
export default function HeroSection() {
  return (
    <div className='  bg-[#141414]  '>
      <Navbar />
      <HeroHomeText />
      <Features />
      <MasterTechSub/>
      <MasterComSpec/>
      <div className='mt-10'>
      <Footer/>
      </div>
    </div>
  )
}
