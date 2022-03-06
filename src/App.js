import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Cats from './Components/Cats';
import Countries from './Components/Countries';
import Excercises from './Components/Excercises';
import Header from './Components/Headers/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/excercises' element={<Excercises />} />
          <Route path='/cats-paradise' element={<Cats />} />
          <Route path='/countries-api' element={<Countries />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}

export default App;
