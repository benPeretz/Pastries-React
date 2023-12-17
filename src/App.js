import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Home from './component/homeComponent/Home';
import SingleProduct from './component/SingleProduct';
import SubjectProduct from './component/SubjectProduct';

import Nav from './component/Nav';

function App() {
  return (
    <div className="App">



<BrowserRouter >
      <Nav />
      <Routes >

      <Route path='/' element={<Home />} />


      <Route path='/catering' element={<SubjectProduct subjectName="catering"/>} />
      <Route path='/cookies' element={<SubjectProduct subjectName="cookies"/>} />
      <Route path='/pastries' element={<SubjectProduct subjectName="pastries"/>} />
      <Route path='/cakes' element={<SubjectProduct subjectName="cakes"/>} />

      <Route path='/cakes/cheese' element={<SingleProduct productName="cheese" productSubject="cakes" />} />
      <Route path='/cakes/fruit' element={<SingleProduct productName="fruit" productSubject="cakes" />} />
      <Route path='/cakes/riba' element={<SingleProduct productName="riba" productSubject="cakes" />} />
      <Route path='/cakes/fruit2' element={<SingleProduct productName="fruit2" productSubject="cakes" />} />


      <Route path='/pastries/classic' element={<SingleProduct productName="classic" productSubject="pastries" />} />
      <Route path='/pastries/classicChocolate' element={<SingleProduct productName="classicChocolate" productSubject="pastries" />} />
      <Route path='/pastries/orange' element={<SingleProduct productName="orange" productSubject="pastries" />} />
      <Route path='/pastries/classic2' element={<SingleProduct productName="classic2" productSubject="pastries" />} />

      <Route path='/cookies/cookies1' element={<SingleProduct productName="cookies1" productSubject="cookies" />} />
      <Route path='/cookies/cookies2' element={<SingleProduct productName="cookies2" productSubject="cookies" />} />
      <Route path='/cookies/cookies3' element={<SingleProduct productName="cookies3" productSubject="cookies" />} />
      <Route path='/cookies/cookies4' element={<SingleProduct productName="cookies4" productSubject="cookies" />} />
      <Route path='/cookies/cookies5' element={<SingleProduct productName="cookies5" productSubject="cookies" />} />
      <Route path='/cookies/cookies6' element={<SingleProduct productName="cookies6" productSubject="cookies" />} />


      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
