import React from 'react'
import Header from '../HomePage/Header/Header'
import Footer from '../HomePage/Footer/Footer'
import { Outlet } from 'react-router-dom'

const AllPages = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default AllPages