import './App.css';
import Features from './Component/Features/Features';
import Header from './Component/Head/Header';
import Home from './Component/Hero/Home';
import Portfolio from './Component/Portfolio/Portfolio';
import Resume from './Component/Resume/Resume';
import Testimonial from './Component/Testimonial/Testimonial';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
    </>
  );
}

export default App;
