import StateContext from './context/StateContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/containers/NavBar';
import WelcomeContainer from './components/containers/WelcomeContainer';
import ItemListContainer from './components/containers/ItemListContainer';
import Footer from './components/containers/Footer';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import Cart from './components/containers/Cart';
const App = () => {
  return (
    <>
      <StateContext>
        <BrowserRouter>
          <NavBar />
            <Routes>
              
              <Route path="/" element={<WelcomeContainer />} />
              <Route path="/products" element={<ItemListContainer />} />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          
          <Footer />
        </BrowserRouter>
        
        </StateContext>
    </>
  );
};

export default App;