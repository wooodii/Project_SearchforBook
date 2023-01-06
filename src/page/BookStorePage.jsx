// import mixtape2 from '../video/mixtape2.mp4';
import BookStore from '../components/BookStore/BookStore';
import './BookStorePage.scss';

const BookStorePage = () => {
    return (
        <>
        {/* <video width="100%" height="100%" controls autoPlay>
            <source src={mixtape2} type="video/mp4"/> 해당 브라우저는 동영상 제공을 지원하지 않습니다.</video> */}

        부산 서점 <br/>
        우리 지역의 크고 다양한 서점들을 소개합니다.
        <BookStore/>

        </>
    );
}
 
export default BookStorePage;