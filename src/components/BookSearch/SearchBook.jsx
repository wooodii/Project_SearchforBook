import './SearchBook.css';
import React, { useState, Component, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/esm/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BookInfo from '../../json/BookInfo.json'
import { useNavigate } from 'react-router-dom';
import SearchResultList from './SearchResultList';
import PageNotFound from '../../page/PageNotFound';
import Pagination from '../Pagination';
import TopSearch from './TopSearch';

    const SearchBook = () => {
        const [searchTerm, setSearchTerm] = useState("");
        // 검색을 했을 때 변수 1개
        const [searchFinish, setSearchFinish] = useState("");
        // 배열 변수 1개
        const [searchArray, setSearchArray] = useState("");
        const [input, setInput]= useState();
        const navigate = useNavigate();
        
        useEffect(()=>{
            const newArray = BookInfo.filter((val)=>{
                if(searchFinish == "") {
                    {return val}
                }else if(val.서명.toLowerCase().includes(searchTerm.toLowerCase())) {
                    {return val}
                }else if(val.저자.includes(searchTerm)){
                    {return val}
                }else if(val.도서관명.includes(searchTerm)){
                    {return val}
                }else {
                    <PageNotFound/>
                } })
            setSearchArray(newArray);
        },[searchFinish])

        // 페이지네이션 구현 
        // 페이지 당 게시물 수 limit / 현 페이지 번호 page / 첫 게시물 위치 offset 
        const [limit, setLimit] = useState(10);
        const [page, setPage] = useState(1);
        const offset = (page - 1)*limit;
        
        // 검색 페이지 조건 이동
        const SearchTitle = () => {navigate('/Searchtitle')}
        const SearchAuthor = () => {navigate('/Searchauthor')}
        const SearchLib = () => {navigate('/Searchlib')}
        
        const bookdata = () => (BookInfo.filter((val)=>{
                                if(searchFinish == "") {
                                    {return val}
                                }else if(val.서명.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    {return val}
                                }else if(val.저자.includes(searchTerm)){
                                    {return val}
                                }else if(val.도서관명.includes(searchTerm)){
                                    {return val}
                                }else {
                                    <PageNotFound/>
                                }
                            }).slice(offset, offset + limit).map((val) => {
                                return <SearchResultList key={val.id} cnt={val.length} 도서관명={val.도서관명} 자료실={val.자료실} 서명={val.서명} 저자={val.저자} 출판사={val.출판사}> </SearchResultList>
                            }))
        
        return(  
            <div style={{margin : "5vh 5em 0 5em"}}>
                <Row>
                    <Col xs={5}>
                    <h3 className = 'ResultTitle'> Search List </h3> 
                    </Col>
                    <Col xs={7}>
                        { 
                           searchFinish == "" ?
                         (
                            <TopSearch/>
                         ) : (<div>
                            <h4 style={{marginTop : "5em"}}> "{input}" 로 검색한 결과입니다. </h4>
                            <p> 총 {searchArray.length} 개의 도서목록이 존재합니다.</p>
                        </div>) 
                        }
                    </Col>
                </Row>
                <Row className='searchBox'>
                    <Form className="d-flex searchForm">
                        <DropdownButton
                                id="dropdown-button-dark-example2" variant="secondary" title="통합검색" className="me-3 searchMenu">
                                <Dropdown.Item href="/Searchtitle" onClick={SearchTitle}>제목</Dropdown.Item>
                                <Dropdown.Item href="/Searchauthor" onClick={SearchAuthor}> 저자</Dropdown.Item>
                                <Dropdown.Item href="/Searchlib" onClick={SearchLib}> 도서관</Dropdown.Item>
                        </DropdownButton>
                        <Form.Control 
                            onChange={e => {setSearchTerm(e.target.value)}}
                            type="text" placeholder="제목/저자/도서관별 검색이 가능합니다" className="me-2" aria-label="Search"> 
                        </Form.Control>
                        <Button type="button" onClick={() => {setSearchFinish(searchTerm); setInput(searchTerm)}} className="searchBtn" variant="outline-dark"> 검색 </Button>
                    </Form>
                </Row>
                   
                <Row>
                    <ListGroup variant="flush">
                        <ListGroup.Item className='searchResultNav'>   
                            <ListGroup.Item> 
                                <Row>
                                <Col xs={2}>도서관</Col>
                                <Col xs={2}>자료실</Col>
                                <Col xs={3}>제목</Col>
                                <Col xs={2}>저자</Col>
                                <Col xs={1}>출판사</Col>   
                                <Col xs={2}>책저장</Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup.Item>
                        <div>
                            {bookdata()}
                        </div>
                    </ListGroup>
                </Row>
                <Row>
                    <Pagination 
                        total={BookInfo.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}/>
                </Row>
            </div>
        );
    }

export default SearchBook;