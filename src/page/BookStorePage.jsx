// import mixtape2 from '../video/mixtape2.mp4';
import BookStore from '../components/BookStore/BookStore';
import './BookStorePage.scss';
import 겨울의색채 from '../asset/banner/겨울의색채.png'

const BookStorePage = () => {
    return (
        <div style={{margin : "0 auto"}}>        
        <img width="100%" height="800px" src={겨울의색채} alt="" />
        
        <h2 style={{fontSize : "3em", fontWeight : "bold", marginTop : "1em"}}> 부산 서점</h2>
        <p style={{fontSize : "1.5em", marginBottom : "2em"}}>   우리 지역의 크고 다양한 서점들을 소개합니다.</p>
        <hr />

        <BookStore/>
  
        </div>
    );
}
 
export default BookStorePage;