// import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import { PageWelcome } from '../common/pages/PageWelcome';
import { PageBooks } from '../common/pages/PageBooks';
import { PageCart } from '../common/pages/PageCart';

function App() {
  return (
    <div className="App">
      <h1>Redux-Toolkit-React-Vite-Typescript</h1>
      <nav>
        <NavLink to="welcome">Welcome</NavLink>
        <NavLink to="books">Books</NavLink>
        <NavLink to="cart">Cart</NavLink>
      </nav>

      <Routes>
        <Route path="welcome" element={<PageWelcome />}></Route>
        <Route path="books" element={<PageBooks />}></Route>
        <Route path="cart" element={<PageCart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
