import { useState } from "react";
import { useParams } from "react-router-dom";
import BookCulturePage from "./BookCulturePage";
import BookSearchPage from "./BookSearchPage";
import RecommendBookPage from "./RecommendBookPage";
import LibraryInfoPage from "./LibraryInfoPage";
import BookStorePage from "./BookStorePage";
import BookPublishPage from "./BookPublishPage";
import MyPage from '../page/MyPage';
import HomePage from '../page/HomePage'; 
import HomePi from "./HomePi";

const RecommendBookPrint = () => {
    const {id} = useParams();

    const [pages, setPages] = useState([
      {id : 1 , category : <HomePi/>},  
      {id : 2 , category : <RecommendBookPage/>},  
      {id : 3 , category : <BookSearchPage/>},  
      {id : 4 , category : <LibraryInfoPage/>},  
      {id : 5 , category : <BookStorePage/>},  
      {id : 6 , category : <BookPublishPage/>},  
      {id : 7 , category : <MyPage/>}, 
    ])

    const page = pages.find((pages) => (pages.id == Number(id)));

    return (
        <>
        {page ? page.category : "페이지가 존재하지 않습니다"}
        </>
    );
}
 
export default RecommendBookPrint;