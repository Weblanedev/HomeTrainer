import React from 'react'
import Hero from '../Hero/Hero'
import Card from '../Card/Card'
import CardTwo from '../Card2/CardTwo'
import ScrollToTopOnMount from '../../ScrollToTopOnMount/ScrollToTopOnMount'

const LandingPage = () => {
  return (
    <>
    <ScrollToTopOnMount />
    <Hero />
    <Card />
    <CardTwo />
    </>
  )
}

export default LandingPage