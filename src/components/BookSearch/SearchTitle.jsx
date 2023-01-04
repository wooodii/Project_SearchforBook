import './SearchBook.css';
import React, { useState, Component, useEffect } from 'react';
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

// 저자로 검사
    const SearchBook = () => {
        const [searchTerm, setSearchTerm] = useState("");
        const navigate = useNavigate()
        const clickMe = () => {
           navigate('/searchResult');
        }

        const SearchBook = () => {navigate('/SearchBook')}
        const SearchAuthor = () => {navigate('/Searchauthor')}
        const SearchLib = () => {navigate('/Searchlib')}

        const [limit, setLimit] = useState(10);
        const [page, setPage] = useState(1);
        const offset = (page - 1)*limit;
    
        return (  
            <Container>
                <Row>
                    <h3 className = 'ResultTitle'> Search Result </h3>
                </Row>
                <Row className='searchBox'>
                    <Form className="d-flex searchForm">
                        <DropdownButton
                                id="dropdown-button-dark-example2" variant="secondary" title= "제목" className="me-3 searchMenu">
                                <Dropdown.Item href="/SearchBook" onClick={SearchBook}> 통합검색</Dropdown.Item>
                                <Dropdown.Item href="/Searchauthor" onClick={SearchAuthor}> 저자</Dropdown.Item>
                                <Dropdown.Item href="/Searchlib" onClick={SearchLib}> 도서관명</Dropdown.Item>
                        </DropdownButton>
                        <Form.Control 
                            onChange={e => {setSearchTerm(e.target.value)}}
                            type="text" placeholder="도서제목을 입력하세요" className="me-2" aria-label="Search"
                            > 
                        </Form.Control>
                        <Button onClick={clickMe} type="button" className="searchBtn" variant="outline-success"> 검색 </Button>
                    </Form>
                </Row>
                <Row>
                    <ListGroup variant="flush">
                        <ListGroup.Item className='searchResultNav'>   
                            <ListGroup.Item> 
                                <Row>
                                <Col>순번(담기)</Col>
                                <Col>도서관</Col>
                                <Col>자료실</Col>
                                <Col>제목</Col>
                                <Col>저자</Col>
                                <Col>출판사</Col>
                                </Row>
                        </ListGroup.Item>
                        </ListGroup.Item>
                        <div>
                            {BookInfo.filter((val)=>{
                                if(searchTerm == "") {
                                    console.log(val);
                                    {return val}
                                }else if(val.서명.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    {return val}
                                }else {
                                    <PageNotFound/>
                                }
                            }).slice(offset, offset + limit).map((val) => {
                                return <SearchResultList key={val.id} 도서관명={val.도서관명} 자료실={val.자료실} 서명={val.서명} 저자={val.저자} 출판사={val.출판사}> </SearchResultList>
                            })}
                        </div>
                    </ListGroup>
                </Row>
                <Row>
                    <Pagination
                    total={BookInfo.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                    />
                </Row>
            </Container>
        );
    }

export default SearchBook;