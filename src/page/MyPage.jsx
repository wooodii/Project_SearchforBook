import { Button, Col, Container, Row } from "react-bootstrap";
import '../components/MyPage/MyPage.css';
import DataContext from "../context/DataContext";
import { useContext, useEffect, useState } from "react";
import Profile from "../components/MyPage/Profile";
import ReviewModal from "../components/MyPage/ReviewModal";
import NavComp from '../components/Menubar/NavComp';

const MyPage = () => {
    const {state} = useContext(DataContext);
    const day = new Date();
    
    const data = useContext(DataContext);
    const [login, setLogin] = useState();

    const [comments, setComments] = useState();

    useEffect(() => { 
        console.log(state.allCommnets);
        //setComments(data.state.allComments.filter((comment) => comment.productId == id))
    })

    // reviewmodal
    const [modalShow, setModalShow] = useState(false);

    return ( 
        <div className="BOX" style={{margin : "0 8em"}}>

            <div style={{marginTop : "10vh"}}> 
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
                        <p style={{fontSize : "1.5em", marginTop : "2em"}}> 도서검색내역 </p>
                        <div style={{overflow : "scroll", marginTop : "-0.5em"}} className="reservationbox">
                                <div >
                                    <Row>
                                        <div>
                                            {data.state.myLib ? 
                                            <div className="bookAddList1">
                                            {data.state.myLib.map(
                                                (lib) => [ 
                                                    <div style={{border : "2px solid black", borderRadius :"20px", margin : "0.5em"}}>
                                                    <div style={{margin : "1em"}}>
                                                        <Row> 도서관명 | {lib.도서관명} </Row>
                                                        <Row>도서제목 |  {lib.서명} </Row>
                                                        <Row> 저자 |  {lib.저자} </Row>
                                                    </div>
                                                    </div>
                                                    ] )}</div> : <div>등록없음</div>} 
                                        </div>
                                    </Row>
                                </div>
                        </div> 
                    
                    </Col>
                    <Col>
                        <p style={{fontSize : "1.6em"}}> 도서대출현황 </p>
                        <div className="borrowbox">

                            <Row style={{border : "2px solid black", borderRadius : "10px", margin : "2em"}}>
                                <div>
                                <Row>
                                    대출일자 | 2023. 1. 06
                                </Row>
                                <Row>
                                    도서번호 | 023013761853
                                </Row>
                                <Row>
                                    반납일자 | 2023. 1. 14 
                                </Row>
                                <Row>
                                    도서제목 | 소크라테스익스프레스
                                </Row>
                                </div>
                            </Row>

                        </div> 
                    
                    </Col>
                    <Col>
                        <p  style={{fontSize : "1.5em", marginTop : "2em"}}> 단골도서관 등록</p>
                        <div style={{overflow : "scroll", marginTop : "-0.5em"}} className="reservationbox">
                                <div >
                                <Row>
                                {/** [book.도서관명] 배열로 여러개 넣는 경우 사용 */}
                                {data.state.myBook ? 
                                (<div style={{fontSize : "1.5em"}}>
                                    {data.state.myBook.map((book)=>[
                                        <div style={{border : "2px solid black", borderRadius : "10px", margin : "1em"}}>
                                        <div>{book.도서관명} </div>
                                        <div>{book.홈페이지주소} </div> 
                                        </div>
                                        ])}
                                </div>) : <div>등록없음 </div>}
                            </Row>
                            <div></div>
                                </div>
                        </div>
                    </Col>
                    <Row>
                        <Col>
                            <p  style={{fontSize : "2em", marginTop : "2em"}}> 최근 본 도서 </p> 
                        <div className="mbtibox" style={{marginTop :"2em"}}>
                            <div className="mapagembtipage">
                                
                            </div>
                        </div>
                        </Col>
                        <Col>
                            <p style={{fontSize : "2em", marginTop : "2em"}} > 도서후기작성</p>
                        <div className="bookcommentbox" style={{marginTop : "0.5em"}}>
                            <>
                                { login
                                    ? 
                                <div style={{marginTop : "2em", fontSize : "1.3em"}}>
                                    <div>{} 권의 리뷰를 작성하셨습니다. </div>
                                    <div>{} 님은 대체로 {} 분야의 책을 주로 읽어요! </div>
                                </div>
                                    : <div style={{marginTop : "2em", fontSize : "1.3em"}}>
                                    로그인 후 후기를 작성해주세요
                                </div>
                                }

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
            </div>
        </div>
    );
}

export default MyPage;