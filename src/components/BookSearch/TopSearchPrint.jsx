import React from "react";
import { Col, Row } from "react-bootstrap";
import './HotTopic.css';

const TopSearchPrint = ({rank, search_word, key}) => {
    
    return (
            <span style={{display : "inline-block", width : "200px", marginBottom : "1em"}}>
            <Row className="HotTopic">
             <Col xs={2}> 
             <span style={{borderRadius : "10px", padding : "0.3em 0.6em", backgroundColor : "#eee"}}> 
             {rank && rank}
             </span>
             </Col>
             <Col xs={10} style={{fontSize : "1.2em"}}>
             {search_word && search_word}
             </Col>  
            </Row>
            </span>
    )
}

export default TopSearchPrint;
