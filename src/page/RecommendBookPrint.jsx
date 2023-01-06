import { useState } from "react";
import { useParams } from "react-router-dom";
import BookCulturePage from "./BookCulturePage";
import BookSearchPage from "./BookSearchPage";
import RecommendBookPage from "./RecommendBookPage";
import LibraryInfoPage from "./LibraryInfoPage";
import BookStorePage from "./BookStorePage";
import HomePage from "./HomePage";
import BookCafePage from "./BookCafePage";
import BookPublishPage from "./BookPublishPage";
import AuthorPage from "./AuthorPage";

const RecommendBookPrint = () => {
    const {id} = useParams();

    const [pages, setPages] = useState([
      {id : 1 , category : <HomePage/>},  
      {id : 2 , category : <RecommendBookPage/>},  
      {id : 3 , category : <BookSearchPage/>},  
      {id : 4 , category : <LibraryInfoPage/>},  
      {id : 5 , category : <BookStorePage/>},  
      {id : 6 , category : <BookCafePage/>},  
      {id : 7 , category : <BookPublishPage/>},  
      {id : 8 , category : <BookCulturePage/>},  
      {id : 9 , category : <AuthorPage/>},  
    ])

    const page = pages.find((pages) => (pages.id == Number(id)));

    return (
        <>
        {page ? page.category : "페이지가 존재하지 않습니다"}
        </>
    );
}
 
export default RecommendBookPrint;