import bear from  '../asset/weeklybest/bear.png'
import './BookPublishPage.scss';
import walk from '../asset/storeimg/walk.png'; 
import Slider from "react-slick";
import CityofRead from './CityofRead';

const BookPublishPage = () => {

  const bookpubData = [
    {id : 1, title : "스토리진", area : "부산 해운대구", des : "주간베스트 도서", bookImg : ""},
    {id : 1, title : "샵메이커즈", area : "부산 수영구", des : "ㄱㄷㅅㄷㄱㅅ", bookImg : ""},
    {id : 1, title : "호밀밭", area : "부산 해운대구", des : "", bookImg : ""},
    {id : 1, title : "스토리진", area : "부산 해운대구", des : "", bookImg : ""},
    {id : 1, title : "스토리진", area : "부산 해운대구", des : "", bookImg : ""},
  ]
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding : 2,
    slidesToShow: 3,
    speed: 500
  };

    return (
    
        <>
      <img width="100%" height="800px" src={walk} alt="" />

        <div style={{marginTop : "4em"}}>
          <h1 style={{fontWeight : "bold", fontSize : "3em"}}>부산 출판사</h1>
          <p style={{fontSize : "1.5em"}}>우리 지역의 크고 다양한 서점을 소개합니다.</p>
        </div>

        <Slider {...settings}>
          {bookpubData.map((i, index) => (
      <div class="component">
      <ul class="align">
      {/* <!-- Book 1 -->*/}
      <li>
      <figure class='book'>        
      {/* <!-- front -->*/}     
        <ul class='hardcover_front'>
          <li>
            <img src={bear} alt="" width="100%" height="100%"/>
            <span class="ribbon bestseller">1위</span>
          </li>
          <li></li>
        </ul>        
        {/* <!-- page->*/}     
        <ul class='page'>
          <li></li>
          <li>
            <a class="btn" href="#">gotolink</a>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>        
         {/* <!-- back -->*/}    
        <ul class='hardcover_back'>
          <li></li>
          <li></li>
        </ul>
        <ul class='book_spine'>
          <li></li>
          <li></li>
        </ul>
        <figcaption>
          <h1>{i.title}</h1>
          <span>{i.area}</span>
          <p>{i.des}</p>
        </figcaption>
      </figure>
    </li>  
    </ul>
 </div>
          ))}
        </Slider>
      
        <CityofRead/>




      

  </>
    );
}
 
export default BookPublishPage;