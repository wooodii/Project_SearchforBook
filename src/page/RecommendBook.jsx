import '../css/RecommendBook.css';
import React from "react";
import { Outlet } from 'react-router-dom';
import NavComp from '../components/NavComp';

function RecommendBook() {  

  return (
    <div>
      <NavComp/>
      <Outlet/>
    </div>
  );
}

export default RecommendBook;
