import { Col, Row } from 'react-bootstrap';
import './SearchBook.css';
import React, { useState, useContext } from 'react';
import DataContext from '../../context/DataContext';
import {FcEditImage, FcLike, FcLikePlaceholder } from "react-icons/fc"; 
// children이 아닌 props로 불러왔기 때문에 태그 안에다가 값을 불러와야 먹힘
const SearchResultList = ({도서관명, 자료실, 서명, 저자, 출판사}) => {

    const data = useContext(DataContext);
    const [likeCheck, setLikeCheck] = useState(false);
    
    const likebook = () => {
        console.log("확인");
        data.action.setMyLib([...data.state.myLib, {도서관명:도서관명, 서명:서명, 저자:저자}])
    }
    
    return (
        <div>
                    <Row>
                        <Col  xs={2}>{도서관명 && 도서관명}</Col>
                        <Col  xs={2}>{자료실 && 자료실}</Col>
                        <Col  xs={3}>{서명 && 서명}</Col>
                        <Col  xs={2}>{저자 && 저자}</Col>
                        <Col  xs={1}>{출판사 && 출판사}</Col>  
                        <Col  xs={2}>


                        <button className="cartBtn" onClick={likebook}>
                            저장하기
                        </button>


                        </Col>
                    </Row>
             <hr />   
        </div>
    );
}

export default SearchResultList;