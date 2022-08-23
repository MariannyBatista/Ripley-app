import Login from './Pages/Login/Login.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './Pages/Products/Products.js';
import NewProduct from './Pages/NewProduct/NewProduct.js';



function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Login />}></Route>
  <Route path='/Products' element={<Products />}></Route>
  <Route path='/newproduct' element={<NewProduct />}></Route>
</Routes>

</BrowserRouter>
  );
}

export default App



