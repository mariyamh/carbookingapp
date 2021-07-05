import React from 'react'
import Banner from './banner'
import CarListing from './carListing'
import Footer from './footer'
import Modals from './modals'
import NavBar from './navBar'
import Offers from './offers'
function Home() {
    return (
        <div>
       <NavBar />
       <Banner />
       <Offers />
       <Modals />
       <CarListing />
       <Footer />
        </div>
    
    )
}

export default Home
