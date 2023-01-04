import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import '../css/BookSlide.css';

const BookSlide = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        maxWidth : "55em",
        maxHight : "65em",
    };

const BookList = [
  {id : 1, title : "물고기는 존재하지 않는다", author : "룰루 밀러", bookImg : "fishNotExist.jpg" }, 
  {id : 2, title : "하얼빈", author : "김훈", bookImg : "harbin.jpg" }, 
  {id : 3, title : "이토록 평범한 미래", author : "김연수", bookImg : "suchOrdinaryFuture.jpg"}, 
  {id : 4, title : "트렌트 코리아 2023", author : " 김난도 외 9명", bookImg : "trendKorea2023.jpg"}, 
  {id : 5, title : "불편한 편의점 ", author : "김호연", bookImg : "uncomfortableStore.jpg"}, 
  {id : 6, title : "파친코1", author : "이민진", bookImg : "pachinko1.jpg"}, 
  {id : 7, title : "명량한 은둔자", author : "캐럴라인 냅", bookImg : "cheerfulHermit.jpg"}, 
]

    return (
   <Row style={{marginTop : "4em"}} fluid className= 'RecommendContainer'><hr/>
        <Col xs={3}>
            <h1 className='text-dark newBook'> Weekly <br/> Bestseller </h1>
            <p> 이번 주 가장 많이 대출된 도서입니다</p>
        </Col>
        <Col xs={9}>
          <Slider {...settings} style={{marginLeft :"2em"}}>
              {BookList.map((book, index) => (
                <div className='slideImg' key={index}>
                  <Row>
                    <div style={{position : "relative"}}>
                      <span className='bookrank' style={{position: "absolute", left : "1.2em", backgroundColor : "red", color : "white", 
                            padding : "0.4em 0.6em", borderBottomLeftRadius : "5px", borderBottomRightRadius : "5px", zIndex : "999", fontWeight : "500"}}> {book.id} </span>
                      <img style={{width : "80%", height : "100%", objectFit: "fill"}} src={require(`../asset/weeklybest/${book.bookImg}`) }></img>
                    </div>
                  </Row>
                  <Row> 
                    <div style={{marginTop : "0.7em", display : "flex", fontWeight : "bold", fontSize : "0.9em"}}> {book.title} </div><br/>
                    <div style={{display : "flex", fontSize : "0.7em"}}>{book.author}</div>
                  </Row>
                </div>
              ))}
          </Slider>
      </Col>
    </Row>

    );
}

export default BookSlide;