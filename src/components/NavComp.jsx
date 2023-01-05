import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
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
    <Navbar bg="light" expand="lg" style={{display : "fixed", top: "0"}}>
      <Container fluid>
        <Navbar.Brand href="/Home"> <div className='navTitle' style={{marginLeft : "1em"}}> Search for Books </div> </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" style={{display : "relative"}}>

            <Nav>
              <button style={{marginRight : "1.5em", fontSize : "14px"}} onClick={() => (navigate('/Home'))}>  홈 </button>
              <button style={{marginRight : "1.5em",  fontSize : "14px"}} onClick={() => (navigate('/RecommendBook/1'))}> 도서추천</button>
              <button style={{marginRight : "1.5em",  fontSize : "14px"}} onClick={() => (navigate('/SearchBook'))}>  도서검색</button>
              <button style={{marginRight : "1.5em",  fontSize : "14px"}} onClick={() => (navigate('/LibInfo'))} > 도서관정보 </button>
            </Nav>
          
          
          <Navbar.Collapse className='Login'>
              {login ? (
                <Nav>
                  <Button style={{all : "unset"}} onClick={() => (navigate('/mypage'))}> <CgUser/> {data.state.user.name}님의 MyPage　</Button> 
                  <Button style={{padding:"4px"}} variant="outline-dark" onClick={logOut}> Logout </Button>
                </Nav>
              ) : (
                <div>
                  <Button variant="outline-dark" onClick={() => {navigate('/loginform')}} > Login </Button>  
                </div>
              )}
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavComp;