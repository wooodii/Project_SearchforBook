import MbtiBook from "../components/RecommendBook/MbtiBook";
import NewBooks from "../components/RecommendBook/NewBooks";
import BookSlide from '../components/RecommendBook/BookSlide';
import background from '../asset/background.png'; 
import BookSlide1 from "../components/RecommendBook/BookSlide1";
import 마지막섬 from '../asset/banner/마지막섬.png';

// import mainpage from '../video/mainpage.mp4';
// import mixtape1 from '../video/mixtape1.mp4';

const RecommendBookPage = () => {
    return (
        <>
            <img width="100%" height="800px" src={마지막섬} alt="" />

            <div style={{marginTop : "4em", marginBottom : "6em"}}>
                <h2 style={{fontSize : "3em", fontWeight : "bold"}}> 도서 추천</h2>
                <p style={{fontSize : "1.3em"}}> 분야별 / 개인별 / 도서관 이용자별 다양한 책 추천을 통해 꼭 맞는 도서를 경험해보세요</p>
            </div>
            
            <hr/>
            
            {/** style={{ backgroundColor : "#F2F0EB"}} */}
            <div style={{margin : "0 4em"}}>
                <BookSlide/>
                <NewBooks/>
                <BookSlide1/>
                <MbtiBook/>

            </div>
            
        </>
    );
}
 

export default RecommendBookPage;