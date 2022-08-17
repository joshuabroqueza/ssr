import "./App.css";
import FoodMenu from "./FoodMenu";
import Header from "./Header";
import SectionGallery from "./SectionGallery";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Header />
      <SectionGallery />
      <FoodMenu />
    </div>
  );
}

export default App;
