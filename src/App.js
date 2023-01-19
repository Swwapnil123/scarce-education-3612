import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/footer';
import Categories from './Categories/Categories';
import Product from './Product/Product';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Categories/>
      <Product/>
     <Footer/>
    </div>
  );
}

export default App;
