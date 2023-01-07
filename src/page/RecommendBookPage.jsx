import BookStory from "../components/BookStory";
import MbtiBook from "../components/RecommendBook/MbtiBook";
import NewBooks from "../components/RecommendBook/NewBooks";
import BookSlide from '../components/RecommendBook/BookSlide';
import mainpage from '../video/mainpage.mp4';
// import mixtape1 from '../video/mixtape1.mp4';

const RecommendBookPage = () => {
    return (
        <>
            <video width="100%" height="100%" controls autoPlay>
            <source src={mainpage} type="video/mp4"/> 해당 브라우저는 동영상 제공을 지원하지 않습니다.</video>
              
             
            <div style={{marginTop : "6em", marginBottom : "6em"}}>
                <h2 style={{fontSize : "3em", fontWeight : "bold"}}> 도서 추천</h2>
                <p style={{fontSize : "1.3em"}}> 분야별 / 개인별 / 도서관 이용자별 다양한 책 추천을 통해 꼭 맞는 도서를 경험해보세요</p>
            </div>
            
            <hr/>
            
            {/** style={{ backgroundColor : "#F2F0EB"}} */}
            <div>
                <BookSlide/>
                <NewBooks/>
                <MbtiBook/>
            </div>
            
        </>
    );
}
 

export default RecommendBookPage;