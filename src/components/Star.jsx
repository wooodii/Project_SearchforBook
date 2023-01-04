import { useState } from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi2";
import '../css/MyPage.css';

const Star = () => {

    const star = <HiStar/>
    const [click, setClick] = useState([false, false, false, false, false]);
    
    const handleStarClick = (e, index) => {
        e.preventDefault();
        let clickStates = [...click];

        for(let i = 0; i < 5; i++) {
            if(i <= index) clickStates[i] = true;
            else clickStates[i] = false;
        }
        setClick(clickStates);
    }

    return (
        <div>
            <button onClick={(e) => handleStarClick(e, 0)} 
                className={click[0] ? "starColor" : null}>{star}</button>

            <button onClick={(e) => handleStarClick(e, 1)} 
                className={click[1] ? "starColor" : null}>{star}</button>
            
            <button onClick={(e) => handleStarClick(e, 2)} 
                className={click[2] ? "starColor" : null}>{star}</button>
            
            <button onClick={(e) => handleStarClick(e, 3)} 
                className={click[3] ? "starColor" : null}>{star}</button>
            
            <button onClick={(e) => handleStarClick(e, 4)} 
                className={click[4] ? "starColor" : null}>{star}</button>
            <p></p>
        </div>
    );
}

export default Star;