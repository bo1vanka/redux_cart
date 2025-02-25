import { Provider } from "react-redux";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import store from "./store";
import './styles.css'
function App() {
  return (
    <div className='container'> 
    <Provider store={store}> 
    <div className="App">
    <ProductList/>
    <Cart/>
    </div>
    </Provider>
    </div>
  );
}

export default App;
