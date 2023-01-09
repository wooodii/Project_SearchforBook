import bear from  '../asset/weeklybest/bear.png'
import './BookPublishPage.scss';
import walk from '../asset/storeimg/walk.png'; 

const BookPublishPage = () => {
    return (
    
        <>

      <img width="100%" height="800px" src={walk} alt="" />

        <div style={{marginTop : "4em"}}>
          <h1 style={{fontWeight : "bold", fontSize : "3em"}}>부산 출판사</h1>
          <p>우리 지역의 크고 다양한 서점을 소개합니다.</p>
        </div>


        <div class="component">
      <ul class="align">
      {/* <!-- Book 1 -->*/}
      <li>
      <figure class='book'>        
      {/* <!-- front -->*/}     
        <ul class='hardcover_front'>
          <li>
            <img src={bear} alt="" width="100%" height="100%"/>
            <span class="ribbon bestseller">Nº1</span>
          </li>
          <li></li>
        </ul>        
        {/* <!-- page->*/}     
        <ul class='page'>
          <li></li>
          <li>
            <a class="btn" href="#">gotohome</a>
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
          <h1>마이 유니버스</h1>
          <span>보수동 책방 골목</span>
          <p>부산 보수동 책방 골목에서 만난 마이 유니버스 독립출판서점을 소개합니다.</p>
        </figcaption>
      </figure>
    </li>  
     {/* <!-- Book 2 -->*/}
    <li>
      <figure class='book'>        
    {/* <!-- f-->*/}       
        <ul class='hardcover_front'>
          <li>
            <img src="https://s.cdpn.io/13060/book2.jpg" alt="" width="100%" height="100%"/>
            <span class="ribbon new">NEW</span>
          </li>
          <li></li>
        </ul>        
       {/* <!-- p-->*/}    
        <ul class='page'>
          <li></li>
          <li>
            <a class="btn" href="#">Download</a>
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
          <h1>샵메이커즈</h1>
          <span>부산국제영화제</span>
          <p>다양한 책 뿐만 아니라
인테리어소품, 가구소품도
판매하고 있어요.

안쪽으로는 샵메이커즈
독서공간인 카페가 있어서
여유를 가지고 많은 독립출판물들을
읽어볼 수도 있죠.</p>
        </figcaption>
      </figure>
    </li>  

    <li>
      <figure class='book'>       

        <ul class='hardcover_front'>
          <li>
            <img src="https://s.cdpn.io/13060/book3.jpg" alt="" width="100%" height="100%"/>
          </li>
          <li></li>
        </ul>        

        <ul class='page'>
          <li></li>
          <li>
            <a class="btn" href="#">Download</a>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>        
   
        <ul class='hardcover_back'>
          <li></li>
          <li></li>
        </ul>
        <ul class='book_spine'>
          <li></li>
          <li></li>
        </ul>
        <figcaption>
          <h1>이솝우화</h1>
          <span>By Aaron Gustafson</span>
          <p>The web is an ever-changing medium whose scope, application, audience and platform continue to grow on a daily basis. If you’ve worked on the web for any amount of time, you’ve likely heard or even used the term “progressive enhancement.”...</p>
        </figcaption>
      </figure>
    </li>
  </ul>  
</div>
<div class="component">
  <ul class="align">
    {/* <!-- Book 1 -->*/}
    <li>
      <figure class='book'>        
    {/* <!-- front -->*/}     
        <ul class='hardcover_front'>
          <li>
            <img src={bear} alt="" width="100%" height="100%"/>
            <span class="ribbon bestseller">Nº1</span>
          </li>
          <li></li>
        </ul>        
        {/* <!-- page->*/}     
        <ul class='page'>
          <li></li>
          <li>
            <a class="btn" href="#">gotohome</a>
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
          <h1>마이 유니버스</h1>
          <span>보수동 책방 골목</span>
          <p>부산 보수동 책방 골목에서 만난 마이 유니버스 독립출판서점을 소개합니다.</p>
        </figcaption>
      </figure>
    </li>  
     {/* <!-- Book 2 -->*/}
    <li>
      <figure class='book'>        
    {/* <!-- f-->*/}       
        <ul class='hardcover_front'>
          <li>
            <img src="https://s.cdpn.io/13060/book2.jpg" alt="" width="100%" height="100%"/>
            <span class="ribbon new">NEW</span>
          </li>
          <li></li>
        </ul>        
       {/* <!-- p-->*/}    
        <ul class='page'>
          <li></li>
          <li>
            <a class="btn" href="#">Download</a>
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
          <h1>샵메이커즈</h1>
          <span>부산국제영화제</span>
          <p>다양한 책 뿐만 아니라
인테리어소품, 가구소품도
판매하고 있어요.

안쪽으로는 샵메이커즈
독서공간인 카페가 있어서
여유를 가지고 많은 독립출판물들을
읽어볼 수도 있죠.</p>
        </figcaption>
      </figure>
    </li>  

    <li>
      <figure class='book'>       

        <ul class='hardcover_front'>
          <li>
            <img src="https://s.cdpn.io/13060/book3.jpg" alt="" width="100%" height="100%"/>
          </li>
          <li></li>
        </ul>        

        <ul class='page'>
          <li></li>
          <li>
            <a class="btn" href="#">Download</a>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>        
   
        <ul class='hardcover_back'>
          <li></li>
          <li></li>
        </ul>
        <ul class='book_spine'>
          <li></li>
          <li></li>
        </ul>
        <figcaption>
          <h1>이솝우화</h1>
          <span>By Aaron Gustafson</span>
          <p>The web is an ever-changing medium whose scope, application, audience and platform continue to grow on a daily basis. If you’ve worked on the web for any amount of time, you’ve likely heard or even used the term “progressive enhancement.”...</p>
        </figcaption>
      </figure>
    </li>
  </ul>  
</div>
        </>
    );
}
 
export default BookPublishPage;