import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';

function App() {
  return (
    	<div className="page-wrapper">
  		<Navbar />
		<Hero />
		<Gallery />
	</div>

  );
}

export default App;
