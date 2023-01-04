import { Button, Col, Container, Row } from "react-bootstrap";
import '../css/MyPage.css';
import DataContext from "../context/DataContext";
import { useContext, useEffect, useState } from "react";
import TodoComp from "../components/TodoComp";
import Profile from "./Profile";
import ReviewModal from "./ReviewModal";

const MyPage = () => {
    const {state} = useContext(DataContext);
    const day = new Date();
    
    // filter ?
    const data = useContext(DataContext);
    const [comments, setComments] = useState();

    useEffect(() => { 
        console.log(state.allCommnets);
        //setComments(data.state.allComments.filter((comment) => comment.productId == id))
    })

    // reviewmodal
    const [modalShow, setModalShow] = useState(false);

    return ( 
        <div className="BOX">
            <Container style={{marginTop : "10vh"}}> 
                <Row>
                    <Col className="titleBox">
                        <h1 className='mypage'> Mypage </h1>
                        <p style={{fontSize : "2em"}}> custom your page!</p>
                    </Col>
                    
                    <Col>
                        <div>
                            <Profile/>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <br/><br/>
                            <p style={{fontSize : "1.5em", fontWeight: "bold", display:"flex", justifyContent:"center"}}> 
                            {state.user.name}님의 <br/> {day.getMonth()+1}월 {day.getDate()}일 활동내역입니다.   </p>          
                        </div>
                    </Col>
                </Row>
                <Row style={{margin : "8vh 0 8vh 0"}}>
                    <Col >

                        <div style={{overflow : "scroll"}} className="reservationbox">
                            <p className="searchbooktitle"> a searching book </p>
                                <div >
                                    <Row>
                                        <div style={{border : "2px solid black"}}>
                                            {data.state.myLib ? <div className="bookAddList1">
                                            {data.state.myLib.map((lib) => [lib.도서관명] )}</div> : <div>등록없음</div>} 
                                            {data.state.myLib ? <div className="bookAddList1">
                                            {data.state.myLib.map((lib) => [lib.서명] )}</div> : <div>등록없음</div>} 
                                            {data.state.myLib ? <div className="bookAddList1">
                                            {data.state.myLib.map((lib) => [lib.저자] )}</div> : <div>등록없음</div>} 
                                        </div>
                                    </Row>
                                </div>
                        </div> 
                    
                    </Col>
                    <Col>
                        <div className="borrowbox">
                            <p className="borrowedbooktitle">a borrowed book </p>
                            <div>
                            <TodoComp/>
                            </div>
                        </div> 
                    
                    </Col>
                    <Col>
                        <div className="libraryPickbox">
                            <p className="librarypick"> regular library</p>
                            <Row>
                                {/** [book.도서관명] 배열로 여러개 넣는 경우 사용 */}
                                {data.state.myBook ? 
                                (<div style={{fontSize : "1.5em"}}>
                                    {data.state.myBook.map((book)=>[book.도서관명])}
                                </div>) : <div>등록없음 </div>}

                                {data.state.myBook ? 
                                (<div>
                                    {data.state.myBook.map((book)=>( book.홈페이지주소))}
                                </div>) : <div>등록없음 </div>}
                            </Row>
                            <div></div>
                        </div>
                    </Col>
                    <Row>
                        <Col>
                        <div className="mbtibox">
                            <p className="mypagembti"> book of your choice </p> 
                            <div className="mapagembtipage">
                                
                            </div>
                        </div>
                        </Col>
                        <Col>
                        <div className="bookcommentbox">
                            <p className="bookcomment" > book review</p>
                            <>
                                <div>{} 권의 리뷰를 작성하셨습니다. </div>
                                <div>{} 님은 대체로 {} 분야의 책을 주로 읽어요! </div>
                                <br/>
                                
                            <Button 
                            variant="success" 
                            onClick={() => setModalShow(true)}>
                            한줄평 작성</Button>

                            <ReviewModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}/>
                            </>
                        </div>
                            
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    );
}

export default MyPage;