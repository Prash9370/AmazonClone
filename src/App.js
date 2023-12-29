import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Poster from './homepage/Poster';
import ProductsCollection from './homepage/ProductsCollection';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Poster/>
      <ProductsCollection/>
    </div>
  );
}

export default App;
