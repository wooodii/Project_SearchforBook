import React from "react";
import RingLoader from "react-spinners/RingLoader";

// 로딩표시
const Loading = () => {
    return ( 
        <div
            style={{
                position : "fixed",
                top : "50%",
                left : "50%", 
                transform : "translate(-50%, -50%)",
            }}>
            <RingLoader
                color = "black"
                height = {15}
                width = {5}
                margin={2}
                />
        </div>    
    );
}

export default Loading;