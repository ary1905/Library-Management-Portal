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
import LoginPage from './components/LogReg/LoginPage';
import Register from './components/LogReg/Register';
import Book from './components/Display/Book';
import SearchBook from './components/Search/SearchBook';
import AddBook from './components/Add/Book/AddBook';
import SuccessBook from './components/Add/Book/SuccessBook';
import Author from './components/Display/Author'
import SearchAuthor from './components/Search/SearchAuthor';
import AddAuthor from './components/Add/Author/AddAuthor';
import SuccessAuthor from './components/Add/Author/SuccessAuthor';
import Admin from './components/Display/Admin';
import SearchAdmin from './components/Search/SearchAdmin';
import Category from './components/Display/Category';
import SearchCategory from './components/Search/SearchCategory';
import AddCategory from './components/Add/Category/AddCategory';
import SuccessCat from "./components/Add/Category/SuccessCat";
//import User from './components/Display/User';
//import SearchUser from './components/Search/SearchUser';
import AddUser from './components/Add/User/AddUser';
import SuccessUser from './components/Add/User/SuccessUser';

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
              <Route path="/about" element={<About mode='dark' />}></Route>
              <Route path='/Books' element={<Book mode='dark'></Book>}></Route>
              <Route path="/AddBook" element={<AddBook></AddBook>}></Route>
              <Route path="/SuccessBook" element={<SuccessBook mode='dark' btnMode='light' />}></Route>
              <Route path="/SearchBook" element={<SearchBook></SearchBook>}></Route>
              <Route path='/Author' element={<Author></Author>}></Route>
              <Route path='/AddAuthor' element={<AddAuthor></AddAuthor>}></Route>
              <Route path='/SuccessAuthor' element={<SuccessAuthor></SuccessAuthor>}></Route>
              <Route path="/SearchAuthor" element={<SearchAuthor></SearchAuthor>}></Route>
              <Route path='/Category' element={<Category></Category>}></Route>
              <Route path='/AddCategory' element={<AddCategory></AddCategory>}></Route>
              <Route path='/SuccessCat' element={<SuccessCat></SuccessCat>}></Route>
              <Route path='/SearchCategory' element={<SearchCategory></SearchCategory>}></Route>
              <Route path='/AddUser' element={<AddUser></AddUser>}></Route>
              <Route path='/SuccessUser' element={<SuccessUser></SuccessUser>}></Route>
              <Route path='/Admin' element={<Admin></Admin>}></Route>
              <Route path='/SearchAdmin' element={<SearchAdmin></SearchAdmin>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;