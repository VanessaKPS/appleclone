import React from 'react';
import Navbar from './NavBar/NavBar.jsx';
import LargeProductSection from './LargeProductSection';
import SmallProductSection from './SmallProductSection';
import Footer from './FooterSection';
import '../styles.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        
      </header>
      <main className="App-main">
        <LargeProductSection />
        <SmallProductSection />
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}
export default App;
