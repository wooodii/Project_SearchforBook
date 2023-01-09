import './RecommendBook.css';
import React from "react";
import { Outlet } from 'react-router-dom';
import NavComp from '../components/Menubar/NavComp';


function RecommendBook() {  

  return (
    <div>
      <NavComp/>
      <Outlet/>
    </div>
  );
}

export default RecommendBook;
