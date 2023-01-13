import './HomePage.scss';
import React from "react";
import Index from '../components/HomeItem/Index';
import { useState } from 'react';
import pageData from '../components/HomeItem/PageData';
import { useRef } from 'react';
import { useEffect } from 'react';

const HomePage = () => {    
    const menuItems = useRef(null); 
    const [renderItems, setRenderItems] = useState(pageData);

    const cloneItems = () => {
        const itemHeight = menuItems.current.childNodes[0].offsetHeight;
        console.log(itemHeight);
        // 첫번째 자식 노드에 index가 할당된 지정된 요소의 자식의 node 넓이를 반환
        const fitMax = Math.ceil(window.innerHeight / itemHeight);
        console.log(fitMax);
        
        const clonedItems = [...renderItems]
            .filter((_, index) => index < fitMax ) // 아이템높이보다 작은 인덱스만 거름
            .map((target) => target);

            console.log(clonedItems.length); 
            setRenderItems([...renderItems, ...clonedItems]);
            return clonedItems.length * itemHeight; 
    };

        const getScrollPos = () => {
            return (
                (menuItems.current.pageYOffset || menuItems.current.scrollTop) - 
                (menuItems.current.clientTop || 0)
            );
        };

        const setScrollPos = (post) => {
            menuItems.current.scrollTop = post;
        };
        
        const initScroll = () => {
            const scrollPos = getScrollPos();
            if(scrollPos < 0 || scrollPos == 0){
                setScrollPos(1);
            }
        }

        
        useEffect(() => {
        const cloneHeight = cloneItems();
        initScroll();
        menuItems.current.style.scrollBehavior = 'unset';

        //1) 스크롤 해서 목차 올리기
        const scrollUpdate = () => {
            const scrollPos = getScrollPos();
            if(cloneHeight + scrollPos >= menuItems.current.scrollHeight){
                setScrollPos(1);
            }else if (scrollPos <= 0){
                setScrollPos(menuItems.current.scrollHeight - cloneHeight)
            }
        };
        
        menuItems.current.addEventListener('scroll', scrollUpdate);
        
        return () => {
         // menuItems.current.removeEventListener('scroll', scrollUpdate);
        }
    }, [])
    
    return ( 
        <div style={{width : "100%"}}>
             <div className="background_Image">   
        <div className="main-container" id="main-container">
        <ul ref={menuItems}>
        {renderItems.map((projectitem, index) => (
            <Index key={index} 
                project={projectitem} 
                itemIndex={index}/> 
            ))}
        </ul>
        </div>
        </div>
        </div>
       
    );
}

export default HomePage;