import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pades/Home";
import {Switch, Route} from "react-router-dom"
import Allproducts from "./pades/Allproducts";
import ProductDetailes from "./pades/ProductDetails";
import Cart from "./pades/Cart";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact>
      <Home/>
      </Route>
      <Route path='/products'>
        <Allproducts/>
      </Route>
      <Route path='/productdetails/:id'>
        <ProductDetailes/>
      </Route>
      <Route to = '/cart'>
        <Cart/>
      </Route>
      </Switch>
     <Footer/>
    </div>
  );
}

export default App;
