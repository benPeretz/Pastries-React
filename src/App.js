import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './component/homeComponent/Home';
import Pastries from './component/homeComponent/Pastries';


import Nav from './component/Nav';

function App() {
  return (
    <div className="App">

    {/* <Nav />
    <Home /> */}

<BrowserRouter >
      <Nav />
      <Routes >

      <Route path='/' element={<Home />} />
      <Route path='/s' element={<Pastries />} />


      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
