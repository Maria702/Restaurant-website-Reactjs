import { BrowserRouter as Router } from "react-router-dom";
import {Features} from "./components/Features";
import {NewFeatures }from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { ProductData, DessertData , FastFoodData} from "./components/Products/data";

import { GlobalStyle } from "./GlobalStyle";


function App() {
  return (
   
    <Router>
      <GlobalStyle />

    <Hero/>
    <Products heading='Choose your Favorite' data={ProductData} />
   <NewFeatures />
   <Products heading='Stressed Spelled Backward is "Dessert"' data={DessertData} /> 
    <Features />
    <Products heading="Fast Food doesn't have to be Junk Food" data={FastFoodData} />
    <Footer />
    </Router>
  );
}
 
export default App;
