import './App.css';
import Navbar2 from './components/Navbar2';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Add from './components/Add';
import Success from './components/Success';
import Inst from './components/Inst';
import LoginPage from './components/LoginPage';
import LibraryPortalHome from './components/LibraryPortalHome';

function App() {

  return (
    <>
      <Router>
        <div>
          <Navbar2 mode='dark'
            searchMode='black'
            textMode='white'
            classMode='mySearch2'
            btnMode='light'
          />
          <div className="container my-3" >
            <Routes>
              <Route path='/' element={<LibraryPortalHome box_shadow = "section1"></LibraryPortalHome>}></Route>
              <Route path='/Login' element={<LoginPage btnMode='dark' cardMode='#d5ad18'></LoginPage>}></Route>
              <Route path='/Inst' element={<Inst mode='dark'></Inst>}></Route>
              <Route path="/AddInst" element={<Add mode='dark' classMode='mySearch2' searchMode='black' textMode='white' btnMode='light'></Add>}></Route>
              <Route path="/about" element={<About mode='dark'/>}></Route>
              <Route path="/success" element={<Success mode='dark' btnMode='light'/>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;