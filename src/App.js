import './App.css';
import FoodMenu from './FoodMenu';
import Header from './Header';
import SectionGallery from './SectionGallery';
import Location from './Location';
import Socials from './Socials';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <Header />
      <SectionGallery />
      <FoodMenu />
      <Location />
      <div className='space'></div>
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
