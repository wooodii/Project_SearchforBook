import React from "react";
import { Col } from "react-bootstrap";
import './HotTopic.css';

const TopSearchPrint = ({rank, search_word, key}) => {
    
    return (
            <span style={{display : "inline-block", width : "140px"}}>
            <span className="HotTopic">
            {rank && rank + " | "} {search_word && search_word} 
            </span>
            </span>
    )
}

export default TopSearchPrint;
