import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
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

  const [myStyle, setMyStyle] = useState({
    backgroundColor: 'white',
    color: 'black',
  });
  const toggleDarkMode = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
  }
  return (
    <>
      <Router>
        <div style={myStyle}>
          <Navbar mode={`${myStyle.backgroundColor === 'white' ? 'light' : 'dark'}`}
            searchMode={`${myStyle.backgroundColor === 'white' ? 'white' : 'black'}`}
            textMode={`${myStyle.backgroundColor === 'white' ? 'black' : 'white'}`}
            classMode={`${myStyle.backgroundColor === 'white' ? 'mySearch1' : 'mySearch2'}`}
            btnMode={`${myStyle.backgroundColor === 'white' ? 'dark' : 'light'}`}
          />
          <div className="form-check form-switch my-3">
            <input className="form-check-input mx-3" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleDarkMode} style={{ float: 'right' }} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ float: 'right' }}>Enable Dark Mode</label>
          </div>
          <div className="container my-3" >
            <Routes>
              <Route path='/' element={<LibraryPortalHome box_shadow={`${myStyle.backgroundColor === 'white' ? 'section2' : 'section1'}`}></LibraryPortalHome>}></Route>
              <Route path='/Login' element={<LoginPage btnMode={`${myStyle.backgroundColor === 'white' ? 'dark' : 'light'}`}
              cardMode={`${myStyle.backgroundColor === 'white' ? '#d5ad18' : '#56564C'}`}
              ></LoginPage>}></Route>
              <Route path='/Inst' element={<Inst mode={`${myStyle.backgroundColor === 'white' ? 'light' : 'dark'}`}></Inst>}></Route>
              <Route path="/AddInst" element={<Add mode={`${myStyle.backgroundColor === 'white' ? 'light' : 'dark'}`}
                classMode={`${myStyle.backgroundColor === 'white' ? 'mySearch1' : 'mySearch2'}`}
                searchMode={`${myStyle.backgroundColor === 'white' ? 'white' : 'black'}`}
                textMode={`${myStyle.backgroundColor === 'white' ? 'black' : 'white'}`}
                btnMode={`${myStyle.backgroundColor === 'white' ? 'dark' : 'light'}`}>
              </Add>}>
              </Route>
              <Route path="/about" element={<About mode={`${myStyle.backgroundColor === 'white' ? 'light' : 'dark'}`} />}>
              </Route>
              <Route path="/success" element={<Success mode={`${myStyle.backgroundColor === 'white' ? 'light' : 'dark'}`}
                btnMode={`${myStyle.backgroundColor === 'white' ? 'dark' : 'light'}`}
              />}>
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;