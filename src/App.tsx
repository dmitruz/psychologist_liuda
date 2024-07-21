import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { MyContacts } from './components/MyContacts/MyContacts';
import { MyServices } from './components/MyServices/MyServices';
import { AboutMe } from './components/AboutMe/AboutMe';
import { ClientReviews } from './components/ClienReviews/ClienReviews';
import './styles/globalStyles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutMe />
      <MyContacts />
      <MyServices />

      <ClientReviews />
    </div>
  );
}

export default App;
