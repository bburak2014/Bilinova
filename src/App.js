import './App.css';
import Header from './Components/Header/Header';
import Sliderimage from './Components/Sliderimage/sliderimage';
import CartList from './Components/CardList/CartList';
import Footer from './Components/Footer/Footer';
 function App() {
  return (
    <div className="App">
      <Header/>
      <Sliderimage/>
      <CartList/>
       <Footer/>
     </div>
  );
}

export default App;
