import React from 'react'
import Navbar from '../ComponentsUtility/Navbar'
import HeroHomeText from '../HomePage/HeroHomeText'
import Features from '../HomePage/HomeFeatures/Features'
import MasterTechSub from '../HomePage/MasterTechnicalSubjects/MasterTechSub'

export default function HeroSection() {
  return (
    <div>
      <Navbar />
      <HeroHomeText />
      <Features />
      <MasterTechSub/>
    </div>
  )
}

