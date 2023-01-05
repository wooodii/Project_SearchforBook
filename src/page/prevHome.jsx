import '../css/Home.css';
import TopSearchPrint from '../components/BookSearch/TopSearchPrint';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import NewBooks from '../components/NewBooks';
import { BsChevronDown } from "react-icons/bs";
import { Row, Col } from 'react-bootstrap';
import React from "react";
import '../css/NewBooks.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { AiFillCaretRight } from "react-icons/ai";
import HotTopic1 from '../components/BookSearch/HotTopic1';
import {Animator, batch, Fade, FadeIn, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, ZoomIn} from 'react-scroll-motion';

const prevHome = () => {
    // hotTopic
    const searchApi = 'http://apis.data.go.kr/6260000/BookSearchWordBestService/getBookSearchWordBest?serviceKey=iK9GwIOwIm6gP%2BhKgBtRb%2BHZBQi6RL3r5v2AbRJCoep8wt6Hvw4KaukJGKu0ThtdEpAegkCUjCyiQvy%2FS%2B1%2FMQ%3D%3D&pageNo=1&resultType=json'
    const [search, setSearch] = useState();

    const getSearch = async() => {
        const response = await fetch(searchApi).then((response) => response.json()); 
        //console.log(response);
        //console.log("get",response.getBookSearchWordBest.body.items.item);
        if (search)  {
            return false;
        }
        setSearch(response.getBookSearchWordBest.body.items.item);
        console.log("get",search);
    }

    useEffect( () => {
        getSearch();
        console.log("set",search)
    }, [search]);

    // bookApi 
    const bookApi = 'http://apis.data.go.kr/6260000/BookNewListService/getBookNewList?serviceKey=iK9GwIOwIm6gP%2BhKgBtRb%2BHZBQi6RL3r5v2AbRJCoep8wt6Hvw4KaukJGKu0ThtdEpAegkCUjCyiQvy%2FS%2B1%2FMQ%3D%3D&pageNo=1&resultType=json'
    const [bookInfo, setBookInfo] = useState();
    const navigate = useNavigate();

    const getBookInfo = async() => {
        const response =  await fetch(bookApi).then((response) => response.json());
        console.log("get", response.getBookNewList.body.items.item);

        setBookInfo(response.getBookNewList.body.items.item);
        console.log("get",bookInfo);
    }
    
    useEffect(() => {
        getBookInfo();
    })

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Sticky(), Move());

    return ( 
        <>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -1000))}>
                    <div className = 'section1' style={{backgroundColor : "lightgray"}}> 
                <Row>  
                    {/*<Canvas >  
                        <Stars className= 'section1back'/>            
                    </Canvas>*/}
                    <Row>
                    <h1 style={{fontSize : "7em"}} className='title'> SEARCH</h1> 
                    </Row>
                    <Row style={{marginTop : "-5vh", marginLeft : "-5vw"}}>
                        <div>
                        <p className='subTitle'>부산시민의 원활하고 편리한 도서관 이용을 위한 <br></br>도서검색 및 도서관 안내 페이지입니다.</p>
                        </div>
                        <div style ={{marginTop : "-10vh"}}>
                        <h1 style={{fontSize : "5em"}} className='fortitle'>FOR</h1>  
                        </div>
                    </Row> 
                    <Row>
                    <h1 style={{fontSize : "7em"}} className='title'> BOOK</h1> 
                    </Row>
                </Row>
                <Row>
                    <div style={{
                        marginTop: "5vh"
                    }}>
                        <button>
                          <p className='scroll'> Scroll <br/> <BsChevronDown/> </p>
                        </button>
                    </div>
                </Row> 
            </div>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={1}>
                    <Animator animation={FadeUp}>
                    <div className ='section2'  style={{backgroundColor : "lightblue"}}>
                <Row>
                    <p className='section2title'> Recommend Book </p>
                    <p className='section2sub'>
                        매일 도서인기검색어 및 신간도서가 업데이트되며, <br/>
                        더보기를 누르면 부산시 전체 인기 도서와 MBTI별 자세한 도서 추천을 볼 수 있어요!
                    </p>   
                </Row>
                <Row style={{marginTop: "5vh"}}>
                    <Col>
                         <p className='hotsearch1'> Weekly <br/> Bestseller </p>
                         <div>

                         </div>
                    </Col>
                    <Col>
                        <p className='hotsearch2'> Best MBTI Books <br/> to Find Out <br /> About Your Personality Type</p>
                        <div>
                        </div>
                    </Col>
                </Row>
            </div>
                    </Animator>
                </ScrollPage>
                
                <ScrollPage page={2}>
                    <Animator animation={FadeUp}>
                    <div className='section3'  style={{backgroundColor : "lightgreen"}}>
            <Row style={{marginTop : "0vh"}}>
                    <p className='section3title'> New books <br /> by BUSAN library</p>
                    <p style={{fontSize:"1.5em"}}>실시간으로 업데이트되는 부산시내 도서관 신간도서 입고현황에 대해 안내합니다.</p> 
                        <div>
                        <Row style={{width : "70vw"}} className="updatebox">
                            <Col>
                            <div>
                                {
                                bookInfo ? 
                                bookInfo.filter((i, index)=> (index == 7)).map((i, index) => (
                                          <NewBooks key={i.id} image={i.image} title_info = {i.title_info}
                                                lib_name = {i.lib_name}/>
                                  )) : <Loading />
                            }  
                            </div>
                            </Col>
                        </Row>
                        </div>
                </Row>
            </div>
                    </Animator>
                </ScrollPage>

                <ScrollPage page={3}>
                    <div className='section5'  style={{backgroundColor : "yellow"}}>
                        <Animator animation={MoveIn(-2000, 0)}>
                        <Col>
                            <div style={{marginLeft : "15vw"}}>
                                <p className='section5title'> Search <br/> Book <br/> 
                                <p style={{fontSize : "0.7em", marginTop: "2vh"}}>and</p> 
                                Search <br/> Library<br/>  
                            </p>
                            </div>
                        </Col>
                         </Animator>
                        
                        <Animator animation={batch(MoveIn(2000, 0), MoveOut(500,0))}>
                         <Col>

                            <div style={{marginTop : "20vh", marginLeft:"10vw"}}>
                                <p className='hotsearch1'>Top Searched</p> 
                            <div className='rankbox'> 
                            {
                                search ?
                                search.filter((s, index)=> (index >=7 && index < 10)).map((s, index)=>(
                                <TopSearchPrint key={index} rank ={s.rank} search_word= {s.search_word}/>)).reverse() : <Loading/>
                            }   
                            </div>
                            <div className='rankbox1'>
                            {
                                search ?
                                search.filter((s, index)=> (index < 7 && index > 3)).map((s, index)=>(
                                <HotTopic1 key={index} rank ={s.rank} search_word= {s.search_word}/>)).reverse() : <Loading/>
                            }
                            </div> 
                            
                            <Animator animation={MoveIn(2000, 0)}>
                            <div style={{marginTop : " 10vh"}}>
                                <p style={{fontSize :"1.7em"}}> 
                                    부산시내 도서관에 대한 정보를 찾을 수 있어요. <br/>
                                    찾으시는 도서 및 방문하려는 도서관 이름을 검색해보세요.
                                </p>
                            </div>

                            <div>
                            <button className='gotosearch' onClick={() => (
                            navigate('/SearchBook'))}> <AiFillCaretRight/> go to Search</button> 
                             <button onClick={() => (
                                navigate('/LibInfo')
                            )}className='gotolibbtn'> <AiFillCaretRight/> go to libryInformation  </button>
                            </div>
                            </Animator>
                            </div>
                            </Col>
                         </Animator>
                    </div>
                </ScrollPage>

                <ScrollPage page={4}>
                    <Animator animation={FadeUp}>
                    <div className='section6' style={{backgroundColor : "brown"}}>
                        <Row>
                        <p className='section6title'> MyPage </p>
                        </Row>
                        <Row style ={{marginTop :"10vh"}}>
                            <Col>
                            <img src="" alt="" style={{width:"35rem", height:"25rem"}}/>
                            </Col>
                            <Col>
                            <Row className='mypagecomment'>
                                <Row>
                                     <p style={{fontSize :"1.7em" }}>
                                    이용자와 관련된 정보는 <br/> 마이페이지에 저장이 가능합니다. <br/>
                                    사이트를 통해 마이페이지를 커스텀하세요!
                                    </p>   
                                </Row>
                                <Row>
                                    <div>
                                          <button style={{ width : "10em", 
                                backgroundColor : "lightblue", padding : "2px", borderRadius : "5px"
                               }} onClick={() => (navigate('/mypage'))}>마이페이지 바로가기</button>
                                    </div>
                                </Row>
                            </Row>
                            </Col>
                        </Row>
                        <Row>
                            <div className='pagebtnbox' >
                                <button className="pageupbtn" onClick={() => (window.scrollTo(0,0))}>
                                <p style={{fontSize : "1.3em", display:"flex", alignItems :"center", 
                                fontFamily: 'Playfair Display SC', marginLeft:"1vw", marginTop:"1.5vh"}}> 
                                 page<br/> up </p></button>
                         
                            </div>
                        </Row>
                        </div>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>

            </>
    );
}

export default prevHome;