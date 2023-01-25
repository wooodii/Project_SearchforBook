import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import './BookSlide.css';


const BookSlide1 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,}

        const BookList1 = [
            {id :1, title : "바다, 바닷가에서", author : "호야킨 소로야", bookImg: "fromTheSea.jpg"},
            {id :2, title : "어린이라는 세계", author : "김소영", bookImg: "childWorld.jpg"},
            {id :3, title : "더 위험한 과학책", author : "랜들 먼로", bookImg: "moreDangerous.jpg"},
            {id :4, title : "그림의 힘", author : "김선현", bookImg: "powerOfPicture.jpg"},
            {id :5, title : "초격차", author : "권오현", bookImg: "superDifference.jpg"},
            {id :1, title : "바다, 바닷가에서", author : "호야킨 소로야", bookImg: "fromTheSea.jpg"},
            {id :2, title : "어린이라는 세계", author : "김소영", bookImg: "childWorld.jpg"},
            {id :3, title : "더 위험한 과학책", author : "랜들 먼로", bookImg: "moreDangerous.jpg"},
            {id :4, title : "그림의 힘", author : "김선현", bookImg: "powerOfPicture.jpg"},
            {id :5, title : "초격차", author : "권오현", bookImg: "superDifference.jpg"},
          ]
   
    return (
        <>

        <Row style={{ marginTop : "5em"}}>
        <div style={{display : "flex"}}>
            <p style={{fontSize : "3em", fontWeight : "bold"}}> 이 주의 책</p>
            <p style={{fontSize : "1.5em", marginTop : "1em", marginLeft : "1em"}}> 이번 주 가장 많이 대출된 도서입니다</p>
        </div>
    
      </Row>

            <Row fluid  style={{marginBottom : "5em"}}>
            <Slider className="slick-slider slick-initialized" {...settings} style={{margin :"2em 4em 0 4em", paddingRight : "7em"}}>
              {BookList1.map((book, index) => (
                <div className='slideImg' key={index}>
                  <Row>
                    <div style={{position : "relative"}}>
                      <img style={{width : "14em", height : "20em", objectFit: "fill", border :"2px solid gray", padding : "3px"}} 
                        src={require(`../../asset/mbti/${book.bookImg}`) }></img>
                    </div>
                  </Row>
                  <Row> 
                    <div style={{marginTop : "0.7em", display : "flex", fontWeight : "bold", fontSize : "1.4em"}}> {book.title} </div><br/>
                    <div style={{display : "flex", fontSize : "1.2em"}}>{book.author}</div>
                  </Row>
                </div>
              ))}
            </Slider>
            </Row>

                
        </>
    );
}
 
export default BookSlide1;