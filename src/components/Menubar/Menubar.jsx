import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Slider from "react-slick";
import '../Menubar/Menubar.scss'; 
import { FcButtingIn, FcConferenceCall, FcDepartment, FcEmptyFilter, FcFilledFilter, FcFilmReel, FcGallery, FcPackage, FcTwoSmartphones } from "react-icons/fc";
import { IconContext } from "react-icons";

const Menubar = () => {

    const MenuBar = [
      {id : 1, title : "전체보기", icon : <FcDepartment/> },
      {id : 2, title : "도서추천", icon : <FcTwoSmartphones/>},
      {id : 3, title : "도서검색", icon : <FcFilledFilter/>  },
      {id : 4, title : "도서관검색", icon :  <FcEmptyFilter/>},
      {id : 5, title : "서점", icon : <FcPackage/> },
      {id : 6, title : "북카페", icon : <FcGallery/> },
      {id : 7, title : "출판사", icon : <FcFilmReel/> },
      {id : 8, title : "도서문화행사", icon : <FcButtingIn/> },
      {id : 9, title : "마이페이지", icon : <FcConferenceCall/> },
    ]

    const [boardlist, setBoardList] = useState(MenuBar);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1
      };

      return (
        <>
        <Slider className="menu_btn" {...settings} style={{ marginTop : "2em", marginRight : "0em", textDecorationLine : "none"}}>
          {boardlist.map((menu, index) => (
            <NavLink className="menu_btn0" key={menu.id} to={`/Recommendbook/${menu.id}`}>
            <button className ="menu_btn1">
            <div className="menubar_btn2"
                style={{width : "80px", 
                  height : "80px", borderRadius : "40px", backgroundColor : "#eee", margin : "2em"}}>
                    <IconContext.Provider value={{ size :"3em", className : "iconsetting"}}>
                    {menu.icon}
                    </IconContext.Provider>
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