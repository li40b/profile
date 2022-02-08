import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Profile from './components/Profile';
import Skill from './components/Skill';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Profile />
      <Skill />
      <Footer/>
    </div>
  );
}

export default App;
