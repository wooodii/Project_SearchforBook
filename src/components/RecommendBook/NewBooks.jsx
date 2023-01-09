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
        <Row  style={{marginBottom : "5em"}}>
            <Row>
            <div style={{
                fontFamily: 'Playfair Display SC',
                marginTop: "50px",
                fontSize: "2em",
                fontWeight: "bold"
            }}> </div></Row>

                <div style={{display : "flex"}}>
                <p style={{fontSize : "3em", fontWeight : "bold"}}> 신간도서</p>
                <p style={{fontSize : "1.5em", marginTop : "1em", marginLeft : "1em"}}> 부산 내 도서관에 입고된 책입니다</p>
                </div>

            <Row style={{margin : "0 4em"}}>
                <Col>
                <div >
                {bookInfo ?
                bookInfo.filter((i, index ) => (index == 4)).map((i, index) => (
                    <span key={i.id} style={{display: "flex"}}>
                    <img style={{width : "16em", height : "20em", display : "inline-block", margin: "1em"}} src={i.image && i.image} alt="" />
                    <div>{i.title}</div>
                </span>
            )): <div>
                <Loading /> 해당 도서를 불러오는 중입니다.
            </div>}
                </div>
            </Col>
            <Col>
                <div>
                {bookInfo ?
                bookInfo.filter((i, index ) => (index == 5)).map((i, index) => (
                    <span key={i.id} style={{display: "flex"}}>
                    <img style={{width : "16em", height : "20em", display : "inline-block", margin: "1em"}} src={i.image && i.image} alt="" />
                    <div>{i.title}</div>
                </span>
            )): <div>
                <Loading /> 해당 도서를 불러오는 중입니다.
            </div>}
                </div>
            </Col>
            <Col>
                <div>
                {bookInfo ?
                bookInfo.filter((i, index ) => (index == 6)).map((i, index) => (
                    <span key={i.id} style={{display: "flex"}}>
                    <img style={{width : "16em", height : "20em", display : "inline-block", margin: "1em"}} src={i.image && i.image} alt="" />
                    <div>{i.title}</div>
                </span>
            )): <div>
                <Loading /> 해당 도서를 불러오는 중입니다.
            </div>}
                </div>
            </Col>
            <Col>
                <div>
                {bookInfo ?
                bookInfo.filter((i, index ) => (index == 7)).map((i, index) => (
                    <span key={i.id} style={{display: "flex"}}>
                    <img style={{width : "16em", height : "20em", display : "inline-block", margin: "1em"}} src={i.image && i.image} alt="" />
                    <div>{i.title}</div>
                </span>
            )): <div>
                <Loading /> 해당 도서를 불러오는 중입니다.
            </div>}
                </div>
            </Col>
            <Col>
                <div>
                {bookInfo ?
                bookInfo.filter((i, index ) => (index == 8)).map((i, index) => (
                    <span key={i.id} style={{display: "flex"}}>
                    <img style={{width : "16em", height : "20em", display : "inline-block", margin: "1em"}} src={i.image && i.image} alt="" />
                    <div>{i.title}</div>
                </span>
            )): <div>
                <Loading /> 해당 도서를 불러오는 중입니다.
            </div>}
                </div>
            </Col>
            <Col>
                <div>
                {bookInfo ?
                bookInfo.filter((i, index ) => (index == 9)).map((i, index) => (
                    <span key={i.id} style={{display: "flex"}}>
                    <img style={{width : "16em", height : "20em", display : "inline-block", margin: "1em"}} src={i.image && i.image} alt="" />
                    <div>{i.title}</div>
                </span>
            )): <div>
                <Loading /> 해당 도서를 불러오는 중입니다.
            </div>}
                </div>
            </Col>
            </Row>
        </Row>
    );
}

export default NewBooks;