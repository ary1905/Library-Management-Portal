import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Navbar2 from './components/Navbar/Navbar2';
import LibraryPortalHome from './components/Home/LibraryPortalHome';
import LoggedOut from './components/Home/LoggedOutHome';
import About from './components/About/About';
import Book from './components/Display/Book';
import SearchBook from './components/Search/SearchBook';
import SearchAuthor from './components/Search/SearchAuthor';
import LoginPage from './components/LogReg/LoginPage';
import Register from './components/LogReg/Register';
import Add from './components/Add/Add';
import Success from './components/Add/Success';
import Back from './components/Back/Back'
import Author from './components/Display/Author'

function App() {

  const [isLogged, setIsLogged] = useState(false);

  const change = () => {
    setIsLogged(!isLogged);
  }

  return (
    <>
      <Router>
        <div>
          {isLogged ?
            <Navbar mode='dark'
              searchMode='black'
              textMode='white'
              btnMode='light'
              change = {change} />
            :
            <Navbar2 mode='dark'
              searchMode='black'
              textMode='white'
              btnMode='light'
            />
          }
          <div className="container my-3" >
            <Routes>
              <Route path='/' element={<LibraryPortalHome box_shadow="section1" isLogged={isLogged}></LibraryPortalHome>}></Route>
              <Route path='/logOut' element={<LoggedOut box_shadow="section1" isLogged={isLogged}></LoggedOut>}></Route>
              <Route path='/Login' element={<LoginPage btnMode='dark' cardMode='#d5ad18' change={change}></LoginPage>}></Route>
              <Route path='/Register' element={<Register btnMode='dark' cardMode='#d5ad18'></Register>}></Route>
              <Route path='/Books' element={<Book mode='dark'></Book>}></Route>
              <Route path="/AddInst" element={<Add mode='dark' classMode='mySearch2' searchMode='black' textMode='white' btnMode='light'></Add>}></Route>
              <Route path="/about" element={<About mode='dark' />}></Route>
              <Route path="/success" element={<Success mode='dark' btnMode='light' />}></Route>
              <Route path="/SearchBook" element={<SearchBook></SearchBook>}></Route>
              <Route path="/SearchAuthor" element={<SearchAuthor></SearchAuthor>}></Route>
              <Route path='/Back' element={<Back></Back>}></Route>
              <Route path='/Author' element={<Author></Author>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;