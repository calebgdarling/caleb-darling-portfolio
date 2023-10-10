import React from 'react';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ContactInfo from './components/sections/contact-info/ContactInfo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default App;
