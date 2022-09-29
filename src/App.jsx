import React from 'react'
import Header from './modules/header/Header'
import Nav from './modules/nav/Nav'
import About from './modules/about/About'
import EX from './modules/xp/XP'
import Contact from './modules/contact/Contact'
import Footer from './modules/footer/Footer'
import Service from './modules/services/Service'
import Testi from './modules/testimonials/Testi'

function App() {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Service/>
        <EX/>
        <Testi/>
        <Contact/>
        <Footer/>

    </>
  );
}

export default App;
