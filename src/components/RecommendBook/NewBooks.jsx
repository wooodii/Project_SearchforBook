import React from "react";
import './NewBooks.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Col, Row } from "react-bootstrap";
import Loading from "../Loading";
import { useState } from "react";
import { useEffect } from "react";

const NewBooks = () => {
    const bookApi = 'http://apis.data.go.kr/6260000/BookNewListService/getBookNewList?serviceKey=iK9GwIOwIm6gP%2BhKgBtRb%2BHZBQi6RL3r5v2AbRJCoep8wt6Hvw4KaukJGKu0ThtdEpAegkCUjCyiQvy%2FS%2B1%2FMQ%3D%3D&pageNo=1&resultType=json'
    const [bookInfo, setBookInfo] = useState();

    const getBookInfo = async() => {
        const response =  await fetch(bookApi).then((response) => response.json());
        console.log("get", response.getBookNewList.body.items.item);

        setBookInfo(response.getBookNewList.body.items.item);
        console.log("get",bookInfo);
    }

    useEffect(() => {
        getBookInfo();
    })

    return ( 
        <Row>

            <Row>

            <div style={{
                fontFamily: 'Playfair Display SC',
                marginTop: "50px",
                fontSize: "2em",
                fontWeight: "bold"
            }}>
                <p>New books</p>
                <p style={{fontSize : "0.8em"}}>by BUSAN library</p>
            </div>
            <p>실시간으로 부산시 내 도서관 신간도서 입고현황에 대해 안내합니다.</p> 
            </Row>
            <Row>

                <Col>
                {bookInfo ?
                bookInfo.map((i, index) => (
                    <span key={i.id} style={{display: "flex"}}>
                    <img style={{width : "16em", height : "20em", display : "inline-block", margin: "1em"}} src={i.image && i.image} alt="" />
                    <div>{i.title}</div>
                </span>
            )): <div>
                <Loading /> 해당 도서를 불러오는 중입니다.
            </div>}
            </Col>
            </Row>
        </Row>
    );
}

export default NewBooks;