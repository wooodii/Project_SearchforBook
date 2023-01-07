// import mixtape2 from '../video/mixtape2.mp4';
import BookStore from '../components/BookStore/BookStore';
import './BookStorePage.scss';

const BookStorePage = () => {
    return (
        <>

        <h2 style={{fontSize : "3em", fontWeight : "bold"}}> 부산 서점</h2>
        <p style={{fontSize : "1.3em"}}>   우리 지역의 크고 다양한 서점들을 소개합니다.</p>
        
        <hr />
        
        <BookStore/>

        </>
    );
}
 
export default BookStorePage;