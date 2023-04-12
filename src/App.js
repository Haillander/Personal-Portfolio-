import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';


function App() {
  const [currentTab, setCurrentTab] = useState("about");

  const renderTab = () => {
    switch (currentTab) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return null;
    }
  };
  return (
    <div>
			<div>
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
      <div>
        <Footer></Footer>
      </div>
		</div>
  );
}

export default App;