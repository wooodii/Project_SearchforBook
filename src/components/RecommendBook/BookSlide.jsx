import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import './BookSlide.css';

const BookSlide = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

const BookList = [
  {id : 1, title : "물고기는 존재하지 않는다", author : "룰루 밀러", bookImg : "fishNotExist.jpg" }, 
  {id : 2, title : "하얼빈", author : "김훈", bookImg : "harbin.jpg" }, 
  {id : 3, title : "이토록 평범한 미래", author : "김연수", bookImg : "suchOrdinaryFuture.jpg"}, 
  {id : 4, title : "트렌트 코리아 2023", author : " 김난도 외 9명", bookImg : "trendKorea2023.jpg"}, 
  {id : 5, title : "불편한 편의점 ", author : "김호연", bookImg : "uncomfortableStore.jpg"}, 
  {id : 6, title : "파친코1", author : "이민진", bookImg : "pachinko1.jpg"}, 
  {id : 7, title : "명량한 은둔자", author : "캐럴라인 냅", bookImg : "cheerfulHermit.jpg"}, 
  {id : 8, title : "트렌트 코리아 2023", author : " 김난도 외 9명", bookImg : "trendKorea2023.jpg"}, 
  {id : 9, title : "불편한 편의점 ", author : "김호연", bookImg : "uncomfortableStore.jpg"}, 
  {id : 10, title : "파친코1", author : "이민진", bookImg : "pachinko1.jpg"}, 
  {id : 11, title : "명량한 은둔자", author : "캐럴라인 냅", bookImg : "cheerfulHermit.jpg"}, 
]

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
                      <img style={{width : "14em", height : "20em", objectFit: "fill"}} 
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

    <Row  style={{marginBottom : "5em"}}>
    <div style={{display : "flex"}}>
            <p style={{fontSize : "3em", fontWeight : "bold"}}> 스테디셀러</p>
            <p style={{fontSize : "1.5em", marginTop : "1em", marginLeft : "1em"}}> 이번달 스테디셀러입니다.</p>
    </div>
    <div>
    <Slider className="slick-slider slick-initialized" {...settings} style={{margin :"2em 2em 0 4em"}}>
              {BookList.map((book, index) => (
                <div className='slideImg' key={index}>
                  <Row>
                    <div style={{position : "relative"}}>
                      <span className='bookrank' style={{position: "absolute", left : "1.2em", backgroundColor : "red", color : "white", 
                            padding : "0.6em 1em", borderBottomLeftRadius : "5px", borderBottomRightRadius : "5px", zIndex : "999", fontWeight : "500"}}> 
                              <span style={{marginLeft : "-0.8em"}}>  {book.id}</span> 
                              </span>
                      <img style={{width : "14em", height : "20em", objectFit: "fill"}} 
                        src={require(`../../asset/weeklybest/${book.bookImg}`) }></img>
                    </div>
                  </Row>
                  <Row> 
                    <div style={{marginTop : "0.7em", display : "flex", fontWeight : "bold", fontSize : "1.4em"}}> {book.title} </div><br/>
                    <div style={{display : "flex", fontSize : "1.2em"}}>{book.author}</div>
                  </Row>
                </div>
              ))}
          </Slider>
    </div>
    </Row>
</>

    );
}


export default BookSlide;