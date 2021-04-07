import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Stage from './Stage'

const MineScreen = () => {
    return (
        <>
            <Navbar />
            <Stage />
            <Footer includeContact = { true } />
        </>
    )
}

export default MineScreen
