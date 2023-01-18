import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Slider from "react-slick";
import '../Menubar/Menubar.scss'; 
import { RiBookmark3Fill, RiBookmarkFill, RiFileSearchFill, RiFileSearchLine, RiStore3Fill, RiBook2Fill, RiBook3Line } from "react-icons/ri";
import { IconContext } from "react-icons";

const Menubar = () => {

    const MenuBar = [
      {id : 1, title : "전체메뉴", icon : <RiBookmark3Fill/> },
      {id : 2, title : "도서추천", icon : <RiBookmarkFill/>},
      {id : 3, title : "도서검색", icon : <RiFileSearchFill/>  },
      {id : 4, title : "도서관안내", icon :  <RiFileSearchLine/>},
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
        <div >
        <Slider className="menu_btn" {...settings} style={{textDecorationLine : "none", margin : "0em 4em"}}>
          {boardlist.map((menu, index) => (
            <NavLink className="menu_btn0" key={menu.id} to={`/Recommendbook/${menu.id}`}>
            <button className ="menu_btn1">
            <div className="menubar_btn2"
                style={{ borderRadius : "50px", marginTop : "1em"}}>
                    <div style={{ 
                        backgroundColor : "#eee", 
                        borderRadius : "50px", width : "4.5em", height : "4.5em", margin : "0.3em"}}>
                        <IconContext.Provider 
                            value={{width : "3em", 
                            height : "3em", size :"2.2em", 
                            className : "iconsetting"}}>
                          {menu.icon}
                        </IconContext.Provider>
                    </div>
            </div>
            </button>
            <p className="menutitle" 
            style={{color : "black", marginTop : "1em", marginBottom : "1em"}}> 
              {menu.title}
            </p> 
            </NavLink> ))}
        </Slider>

        <hr />
        <Outlet/>
        </div>
    );
}
 
export default Menubar;