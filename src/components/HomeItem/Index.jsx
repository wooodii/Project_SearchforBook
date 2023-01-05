import ImgData from "./ImgData";
import Title from "./Title";
import './index.scss';
import { useReducer, useRef } from "react";

const initialState = {
    opacity : 0,
    parallaxPos : {x : 0, y : -20}
}

function reducer (state, action){
    switch(action.type){
        case "CHANGE/OPACITY" : {
            return {   
                ...state,
                opacity : action.payload
            }
        }
        case "MOUSE/COORDINATES" : {
            return {
                ...state, 
                parallaxPos : action.payload
            }
        }
        default : {
            throw new Error();
        }
    }
}

const Index = ({project, itemIndex}) => {
    const listItem = useRef(null);
    const [state, dispatch] = useReducer(reducer, initialState);

    const parallax = (event) => {
        const speed = -5;
        const x = (window.innerWidth - event.pageX * speed)/100;
        const y = (window.innerHeight - event.pageY * speed)/100;

        dispatch({type : "MOUSE/COORDINATES", payload : {x,y}})

        console.log(x, y);
    }

    const handleMouseEnter = () => {
        dispatch({type : 'CHANGE/OPACITY', payload : 1});
        listItem.current.addEventListener('mousemove', parallax);
        console.log("here");
    };

    const handleMouseLeave = () => {
        listItem.current.removeEventListener('mousemove', parallax);
        dispatch({type : 'CHANGE/OPACITY', payload : 0});
        // 마우스가 title을 떠나면 사진이 사라짐
        dispatch({type : "MOUSE/COORDINATES", payload : initialState.parallaxPos});
        console.log("here2");
    };

    return (
        <li className="project-item-container" ref={listItem}>
            <Title title={project.title} 
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}/>
            <ImgData url={project.url} 
                opacity={state.opacity} 
                parallaxPos={state.parallaxPos}/>


            <div className="info-block">
                <p className="info-block-header">
                    <span> 
                        0{itemIndex}
                    </span>
                </p>
            {project.info.map((element) => (
                <p key={element}><span>{element}</span></p>
            ))}
            
            </div>
        </li>
    );
}
 
export default Index;