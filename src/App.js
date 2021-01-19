
import { BrowserRouter, Route } from 'react-router-dom';
import AddProduct from './AddProduct';
import './App.css';
import EditProduct from './EditProduct';
import Header from './Header';
import Login from './Login';
import Register from './Register';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Header />     
       <div>    
         <Route path="/login">
           <Login/>
         </Route>
         <Route path="/register">
           <Register/>
         </Route>
         <Route path="/add">
           <AddProduct/>
         </Route>
         <Route path="/edit">
           <EditProduct/>
         </Route>
       </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
