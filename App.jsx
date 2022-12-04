import Nav from "./components/Nav"
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages/Home";
import Books from "./pages/Books";
import {books} from "./data"
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity) {
setCart(cart.map(item => {
 if (item.id === book.id) {
 return {

   ...item, quantity : +quantity
 }

 
 }
 else {
  return item
 }

 
}))
  }

function removeBook(item) {
setCart(cart.filter(book => item.id !== book.id))
}
function itemNumber() {
  let counter = 0
  cart.forEach(item => {
    counter += item.quantity
  })
  return counter
}


  useEffect(() =>{
    console.log(cart);
  }, [cart])

  return (
    <Router>


    <div className="App">
     <Nav itemNumber={itemNumber()}></Nav>
     <Route path="/" exact component={Home} />
     <Route path="/books" exact render={() => <Books books={books} /> } />
     <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart} ></BookInfo>} /> 
     <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeBook={removeBook}></Cart>} ></Route>
     <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
