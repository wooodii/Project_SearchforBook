import '../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from "react";
import '../css/NewBooks.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
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

    return ( 
        <div>
            <div>
                <div style={{display : "absolute", width : "100%", height : "100%", zIndex : "20", backgroundColor : "white"}}></div>
                
                
                
                <button style={{display : "fixed",  top : "0", zIndex : "999", border : "2px solid black"}}>신간도서 구경하기</button>
            </div>
        </div>
    );
}

export default Home;