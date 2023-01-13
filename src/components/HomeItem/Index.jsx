import ImgData from "./ImgData";
import Title from "./Title";
import './index.scss';
import { useReducer, useRef } from "react";
import Animate from "./Animate";


const initialState = {
    opacity : 0,
    parallaxPos : {x : 0, y : -20},
    scale : 0.8,
    rotationPosition : 0
}

function reducer (state, action){
    switch(action.type){
        case "MOUSE/ENTER" : {
            return {   
                ...state,
                active : true,
            }
        }
        case "MOUSE/LEAVE" : {
            return {   
                ...state,
                active : false,
            }
        }
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
        case "CHANGE/ROTATION" : {
            return {
                ...state,
                rotationPosition : action.payload
            }
        }
        case "CHANGE/SCALE" : {
            return {
                ...state, 
                scale : action.payload
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
    const easeMethod = 'linear';

    const parallax = (event) => {
        const speed = -5;
        const x = (window.innerWidth - event.pageX * speed)/100;
        const y = (window.innerHeight - event.pageY * speed)/100;
        dispatch({type : "MOUSE/COORDINATES", payload : {x,y}});
        console.log(x, y);
    }
     
    const handleRotation = (currentRotation, duration) => {
        // random between -15 ~ 15
        const newRotation = Math.random() * 15 * (Math.round(Math.random()) ? 1 : -1);

        Animate({
            fromValue : currentRotation,
            toValue : newRotation,
            onUpdate : (newOpacity, callback) => {
                dispatch({type : 'CHANGE/OPACITY', payload : newOpacity});
                callback();
            },
            onComplete :  () => {},
            duration : duration,
            easeMethod : easeMethod
        })
    }


    const handleOpacity = (initialOpacity, newQpacity, duration) => {
        Animate({
            fromValue : initialOpacity,
            toValue : newQpacity,
            onUpdate : (newOpacity, callback) => {
                dispatch({type : 'CHANGE/OPACITY', payload : newOpacity});
                callback();
            },
            onComplete :  () => {},
            duration : duration,
            easeMethod : easeMethod
        })
    }
    
    const handleScale = (initialScale, newScale, duration) => {
        Animate({
            fromValue : initialScale,
            toValue : newScale,
            onUpdate : (newOpacity, callback) => {
                dispatch({type : 'CHANGE/SCALE', payload : newOpacity});
                callback();
            },
            onComplete :  () => {},
            duration : duration,
            easeMethod : easeMethod
        })
    }

    const handleMouseEnter = () => {
        handleScale(0.8, 1, 500);
        handleOpacity(0, 1, 1500);
        handleRotation(state.rotationPosition, 500);
        listItem.current.addEventListener('mousemove', parallax);
        dispatch({type : 'CHANGE/OPACITY', payload : 1});  // 책 나타나는 함수 
        dispatch({type : "MOUSE/ENTER"});
        console.log("here");
    };
    
    
    const handleMouseLeave = () => {
        listItem.current.removeEventListener('mousemove', parallax);
        handleScale(1, initialState.scale, 500);
        handleOpacity(1, 0, 800);
        handleRotation(state.rotationPosition, )
        dispatch({type : 'CHANGE/OPACITY', payload : 0});
        dispatch({type : "MOUSE/LEAVE"});
        // 마우스가 title을 떠나면 사진이 사라짐
        //dispatch({type : "MOUSE/COORDINATES", payload : initialState.parallaxPos});
        console.log("here2");
    };

    return (
        <li className="project-item-container" ref={listItem}>
            <Title title={project.title} 
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}/>

            

            <div className="info-block">
                <p className="info-block-header">
                    <span className="info-block-span"> 
                        0{itemIndex}
                    </span>
                </p>
            {project.info.map((element) => (
                <p className="info-p" key={element}>
                    <span className="info-span-content">{element}</span>
                </p>
            ))}
            </div>


            <ImgData url={project.url} 
                opacity={state.opacity} 
                parallaxPos={state.parallaxPos}
                rotationPosition={state.rotationPosition}
                scale={state.scale}
                />

        </li>
    );
}
 
export default Index;