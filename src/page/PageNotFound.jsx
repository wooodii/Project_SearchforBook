import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <Container
        style={{
            border: "solid 2px black",
            display : "block",
            height : "80vh",
            // 설정 안먹힘
            justifyContent: "center", 
            alignContent :"center",
            marginTop : "10vh",
            marginBottom : "10vh"
        }}> 
        <Row style={{margin : "25vh 0 0 0",}}>
            <h1> 해당 페이지를 찾을 수 없습니다. </h1>
        </Row>
        
        <Row style={{marginTop : "20px"}}>
            <div >
                <Nav.Link style = {{borderBottom :"solid black 2px",borderTop :"solid black 2px", display: "inline-block"}} href="/Home"> 
                    <FontAwesomeIcon icon= {faHouse} /> 
                    <h6> 홈페이지로 이동하기 </h6> 
                </Nav.Link>
            </div> 
        </Row>
        </Container>
    );
}

export default PageNotFound;