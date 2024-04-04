import React from 'react'
import Hero from '../Hero/Hero'
import Card from '../Card/Card'
import ScrollToTopOnMount from '../../ScrollToTopOnMount/ScrollToTopOnMount'
import CardTwo from '../SecondCard/CardTwo'

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