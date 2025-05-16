import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/navbar'
import {Router} from './router/router'
import ContactUs from './Components/Contact_Us/contactUs';
import Footer from './Components/Footer/footer'

function App() {
  return (
    <div className="App" >
        <Navbar />
        <Router />
        <ContactUs  />
    </div>
  );
}

export default App
