// import './App.css';

import { NavLink, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="welcome">Welcome</NavLink>
        <NavLink to="info">Info</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>

      <Routes>
        <Route></Route>
      </Routes>

      <h1>Redux-Toolkit-React-Vite-Typescript</h1>
    </div>
  );
}

export default App;
