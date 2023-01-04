import React, { Component } from "react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Slider from "react-slick";


const Menubar = () => {

    const MenuBar = [
      {id : 1, title : "전체보기" },
      {id : 2, title : "도서추천" },
      {id : 3, title : "도서검색" },
      {id : 4, title : "도서관검색" },
      {id : 5, title : "서점" },
      {id : 6, title : "북카페" },
      {id : 7, title : "출판사" },
      {id : 8, title : "도서문화행사"},
      {id : 9, title : "작가인터뷰"},
    ]

    const [boardlist, setBoardList] = useState(MenuBar);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1
      };

      return (
        <>
        <Slider {...settings} style={{ marginTop : "2em", marginRight : "0em"}}>
          {boardlist.map((menu, index) => (
            <NavLink style={{textDecorationLine : "none"}} to={`/Recommendbook/${menu.id}`}>
            <button 
              key={menu.id} className="menubarBtn">
            <div
                style={{backgroundColor :"#eee", width : "80px", 
                  height : "80px", borderRadius : "50px"}}>
            </div>
            </button>
            <p>
              <span style={{color : "black", WebkitTextDecorationLine : "none"}}> {menu.title}</span> 
            </p>
            </NavLink> ))}
        </Slider>
        <Outlet/>
        </>
    );
}
 
export default Menubar;