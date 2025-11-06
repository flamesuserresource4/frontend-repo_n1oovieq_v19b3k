import React from 'react';
import Hero from './components/Hero';
import Details from './components/Details';
import SubmitForm from './components/SubmitForm';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <Details />
      <SubmitForm />
      <Footer />
    </div>
  );
}

export default App;
