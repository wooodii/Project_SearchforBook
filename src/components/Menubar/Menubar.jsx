import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Slider from "react-slick";
import '../Menubar/Menubar.scss'; 
import { RiBookmark3Fill, RiBookmarkFill, RiFileSearchFill, RiFileSearchLine, RiStore3Fill, RiBook2Fill, RiBook3Line } from "react-icons/ri";
import { IconContext } from "react-icons";

const Menubar = () => {

    const MenuBar = [
      {id : 1, title : "목차", icon : <RiBookmark3Fill/> },
      {id : 2, title : "도서추천", icon : <RiBookmarkFill/>},
      {id : 3, title : "도서검색", icon : <RiFileSearchFill/>  },
      {id : 4, title : "도서관검색", icon :  <RiFileSearchLine/>},
      {id : 5, title : "서점/북카페", icon : <RiStore3Fill/> },
      {id : 6, title : "출판사", icon : <RiBook2Fill/> },
      {id : 7, title : "마이페이지", icon : <RiBook3Line/> },
    ]

    const [boardlist, setBoardList] = useState(MenuBar);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1
      };

      return (
        <>
        <Slider className="menu_btn" {...settings} style={{textDecorationLine : "none"}}>
          {boardlist.map((menu, index) => (
            <NavLink className="menu_btn0" key={menu.id} to={`/Recommendbook/${menu.id}`}>
            <button className ="menu_btn1">
            <div className="menubar_btn2"
                style={{ borderRadius : "50px"}}>
                    <div style={{ backgroundColor : "#eee", borderRadius : "50px", width : "6em", height : "6em"}}>
                        <IconContext.Provider 
                            value={{width : "5em", height : "5em", size :"2.5em", className : "iconsetting"}}>
                          {menu.icon}
                        </IconContext.Provider>
                    </div>
            </div>
            </button>
            <p style={{color : "black", marginTop : "0.5em", marginBottom : "1em"}}> {menu.title}</p> 
            </NavLink> ))}
        </Slider>

        <hr />
        <Outlet/>
        </>
    );
}
 
export default Menubar;