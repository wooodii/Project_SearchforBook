import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Slider from "react-slick";
import '../Menubar/Menubar.scss'; 

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
        <Slider className="menu_btn" {...settings} style={{ marginTop : "2em", marginRight : "0em", textDecorationLine : "none"}}>
          {boardlist.map((menu, index) => (
            <NavLink className="menu_btn0" key={menu.id} to={`/Recommendbook/${menu.id}`}>
            <button className ="menu_btn1">
            <div className="menubar_btn2"
                style={{backgroundColor :"#eee", width : "80px", 
                  height : "80px", borderRadius : "40px"}}>
            </div>
            </button>
            <p style={{color : "black", marginTop : "0.5em"}}> {menu.title}</p> 
            </NavLink> ))}
        </Slider>
        <Outlet/>
        </>
    );
}
 
export default Menubar;