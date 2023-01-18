import { CgUser } from "react-icons/cg";

// css
import './NavComp.css';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import DataContext from '../../context/DataContext';
import { useEffect} from 'react';

function NavComp() {
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
    <>
     <nav style={{padding : "2em 0", fontSize : "1.2em", position : "abosulte", top : 0}} className="navbar">
                <div>
                    <button onClick={() => (navigate('/Home'))}
                      style={{marginLeft : "1.5em", marginRight : "1.5em", fontSize : "1.2em", fontWeight : "bold"}}>
                      Search for Books</button>
                </div>
                
                <div>
                    <button className="navbtn" style={{marginRight : "1.5em", fontSize : "1.2em", }} onClick={() => (navigate('/Home'))}>  홈 </button>
                    <button className="navbtn" style={{marginRight : "1.5em",  fontSize : "1.2em"}} onClick={() => (navigate('/RecommendBook/2'))}> 도서추천</button>
                    <button className="navbtn" style={{marginRight : "1.5em",  fontSize : "1.2em"}} onClick={() => (navigate('/RecommendBook/3'))}>  도서검색</button>
                    <button className="navbtn" style={{marginRight : "1.5em",  fontSize : "1.2em"}} onClick={() => (navigate('/RecommendBook/4'))} > 도서관안내 </button>
                </div>

                <div style={{marginRight : "1.5em",}}>
                {login ? (
                <div>
                  <button className="navbtn" 
                  style={{all : "unset"}} 
                  onClick={() => (navigate('/mypage'))}> 
                  <CgUser/> {data.state.user.name}님의 마이페이지　</button> 
                  <button className="navbtn" style={{padding:"4px"}} variant="outline-dark" onClick={logOut}> 로그아웃 </button>
                </div>
              ) : (
                <div>
                  <button variant="outline-dark" onClick={() => {navigate('/loginform')}} > 로그인 </button>  
                </div>
              )}
                </div>
            </nav>
    </>
  );
}

export default NavComp;