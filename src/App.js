//css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// library
// switch == Routes
import {Route, Routes} from 'react-router-dom';
import NavComp from './components/NavComp'
import Home from './page/Home';
import Layout from './page/Layout';
import RecommendBook from './page/RecommendBook';
import Login from './page/Login';
import PageNotFound from './page/PageNotFound';
import MyPage from './page/MyPage';
import { DataProvider } from './context/DataContext';
import RecommendBookPrint from './page/RecommendBookPrint';
import LibraryInfoPage from './page/LibraryInfoPage';
import SearchBook from './components/BookSearch/SearchBook';
import SearchTitle from './components/BookSearch/SearchTitle';
import SearchLib from './components/BookSearch/SearchLib';
import SearchAuthor from './components/BookSearch/SearchAuthor';
import Menubar from './components/Menubar/Menubar';

function App() {
  return (
    <div className="App">
      <DataProvider >
      <NavComp/>     
          <Routes>
                <Route path='/' element = {<Layout />}>
                  <Route path='/Home' element = {<Home />}/>
                  <Route exact path='/' element = {<Home />}/>

                  <Route path='/RecommendBook' element = {<RecommendBook />}>
                   <Route path='/RecommendBook' element = {<Menubar/>}>
                      <Route path='/RecommendBook/:id' element={<RecommendBookPrint/>}></Route>
                    </Route>  
                  </Route>
                  
                  <Route path='/SearchBook' element = {<SearchBook />}></Route>
                  <Route path='/LibInfo' element = {<LibraryInfoPage />}/> 
                  <Route path='/loginform' element = {<Login />}/>
                  <Route path='/mypage' element = {<MyPage />} />
                  <Route path = "*" element={<PageNotFound />} />
                  <Route path='/Searchtitle' element= {<SearchTitle/>} />
                  <Route path='/Searchauthor' element= {<SearchAuthor/>} />
                  <Route path='/Searchlib' element= {<SearchLib/>} />
                </Route> 
          </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
