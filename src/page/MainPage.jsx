import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';
import {CgUser } from "react-icons/cg";
// import mainpage from '../video/mainpage.mp4';
import FooterComp from '../components/FooterComp';
import './MainPage.scss'; 

const MainPage = () => {
    const [login, setLogin] = useState(true);
    const data = useContext(DataContext);
    const navigate = useNavigate();

    useEffect(() => {
        setLogin(data.state.user ? true : false)
      }, [data.state.user])
    
      const logOut = () => {
        setLogin(false);
        data.action.setUser(null);
        navigate("/");
      }

    return (
        <div style={{width : "100%", height : "100%", overflow: "hidden", margin : "0",position : "relative"}}>

            {/* <video width="100%" loop muted controls autoPlay style={{position : "absolute", left : 0}}>
            <source src={mainpage} type="video/mp4" /> 해당 브라우저는 동영상 제공을 지원하지 않습니다.
            </video>  */}

              <nav style={{padding : "2em 0", fontSize : "1.2em", position : "abosulte", top : 0}} className="navbar">
                <div>
                    <button style={{marginLeft : "1.5em", marginRight : "1.5em", fontSize : "1.2em", fontWeight : "bold"}}>Search for Books</button>
                </div>
                
                <div>
                    <button style={{marginRight : "1.5em", fontSize : "1.2em", }} onClick={() => (navigate('/Home'))}>  홈 </button>
                    <button style={{marginRight : "1.5em",  fontSize : "1.2em"}} onClick={() => (navigate('/RecommendBook/2'))}> 도서추천</button>
                    <button style={{marginRight : "1.5em",  fontSize : "1.2em"}} onClick={() => (navigate('/RecommendBook/3'))}>  도서검색</button>
                    <button style={{marginRight : "1.5em",  fontSize : "1.2em"}} onClick={() => (navigate('/RecommendBook/4'))} > 도서관정보 </button>
                </div>

                <div style={{marginRight : "1.5em"}}>
                {login ? (
                <div>
                  <button style={{all : "unset"}} onClick={() => (navigate('/mypage'))}> <CgUser/> {data.state.user.name}님의 마이페이지　</button> 
                  <button style={{padding:"4px"}} variant="outline-dark" onClick={logOut}> 로그아웃 </button>
                </div>
              ) : (
                <div>
                  <button variant="outline-dark" onClick={() => {navigate('/loginform')}} > 로그인 </button>  
                </div>
              )}
                </div>
            </nav>

            {/* <link href="https://fonts.googleapis.com/css?family=Playfair+Display|Playfair+Display+SC" rel="stylesheet" />

            <div id="main" >
            <div class="card">
            <div class="mainimg"></div>

            <div class="article" style={{
                fontSize : "2em"
            }}><p>2023</p></div>

        <div class="block">

            <div class="headline">
                <h1 style={{fontWeight :"bold"}}>SEARCH FOR BOOKS </h1>by Busan library </div>
            <div class="para" />
            <p style={{
                marginTop :"2em", fontSize : "1.4em", marginLeft : "-5em"
            }}> 
                <br /> 부산시민을 위한 도서검색서비스입니다.
                <br /> events set in a new-build / years from now, a mess of a place filled / with
                <br /> books and records, our kids thick as thieves / redefining all notions of
                <br /> mischief. <br />
                Perhaps our paths will cross in a city / of seven hills as the light draws
                <br /> your face / out from the bliss of anonymity. / Maybe you’ll be stroking the
                <br /> goose-down nape / of a small child with eyes the exact shade / of those I
                <br /> met across a room at the startof this pain-in-the-heart, this febrile
                <br /> dance. </p>
            </div>     
        </div></div> */}

          <FooterComp style={{position : "absolute", bottom : 0}}/>
        </div>
    );
}
 
export default MainPage;