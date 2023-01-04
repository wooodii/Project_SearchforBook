import { useContext } from "react";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import '../css/Login.css';

const Login = () => {
    const [name, setName] = useState("");
    const {action} = useContext(DataContext);
    const navigate = useNavigate();
    
    const loginUser = () => {
        action.setUser({name : name, likelist : []})
        navigate('/mypage');
    }

    return ( 
      <Container className="LoginBox">
        <Form className="LoginForm" onSubmit={loginUser}>
        <Form.Group className="mb-3 IdBox" controlId="formBasicEmail">
          <Form.Label className="IdLabel"> 아이디 </Form.Label>
          <Form.Control type="text" placeholder="Enter ID" onChange={(e) => {setName(e.target.value)}}/>
        </Form.Group>
  
        <Form.Group className="mb-3 PwBox" controlId="formBasicPassword">
          <Form.Label className="PwLabel"> 비밀번호 </Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>

        <Form.Text style={{size : "10px"}} className="text-muted">
            해당 로그인 정보는 도서정보 검색 및 관심도서 저장을 위해 사용됩니다.
        </Form.Text> 
        
        <Form.Group>
          <Button className="LoginBtn" variant="outline-dark" type="submit"> 로그인 </Button>  
        </Form.Group>
        
        </Form>
      
      </Container>
    );
};

export default Login;