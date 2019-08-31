import React from 'react';

import NavbarPage from './NavbarPage';
import Hero from './Hero';
import OurThoughts from './OurThoughts';
import OurAssistance from './OurAssistance';
import OurCustomers from './OurCustomers';

function App() {
  return (
    <div className="App">
      <NavbarPage />
      <Hero />
      <OurThoughts />
      <OurAssistance />
      <OurCustomers />
    </div>
  );
}

export default App;
