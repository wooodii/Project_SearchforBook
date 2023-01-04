import '../css/RecommendBook.css';
import React from "react";
import { Outlet } from 'react-router-dom';

function RecommendBook() {  

  return (
    <div>
      <Outlet/>
    </div>
  );
}

export default RecommendBook;
