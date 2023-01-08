import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ImHome3 } from "react-icons/im";
import { CgUser } from "react-icons/cg";

// fontawsome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faMagnifyingGlass, faBook, faCircleInfo} from '@fortawesome/free-solid-svg-icons';

// css
import '../css/NavComp.css';
import { NavLink } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
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
                    <button style={{marginLeft : "1.5em", marginRight : "1.5em", fontSize : "1.2em", fontWeight : "bold"}}>Search for Books</button>
                </div>
                
                <div>
                    <button style={{marginRight : "1.5em", fontSize : "1.2em", }} onClick={() => (navigate('/Home'))}>  홈 </button>
                    <button style={{marginRight : "1.5em",  fontSize : "1.2em"}} onClick={() => (navigate('/RecommendBook/1'))}> 도서추천</button>
                    <button style={{marginRight : "1.5em",  fontSize : "1.2em"}} onClick={() => (navigate('/SearchBook'))}>  도서검색</button>
                    <button style={{marginRight : "1.5em",  fontSize : "1.2em"}} onClick={() => (navigate('/LibInfo'))} > 도서관정보 </button>
                </div>

                <div style={{marginRight : "1.5em",}}>
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
    </>
  );
}

export default NavComp;