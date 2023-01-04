import React from 'react';

export default function App() {
  return (
    <footer className='text-center text-white' style={{ backgroundColor: '#21081a' }}>
      <div className='text-center p-3' style={{ backgroundColor: 'black', color : 'white' }}>
       <div style={{display : 'block'}}>
            (46949) 부산광역시 사상구 사상로310번길 33(덕포동) | 
            TEL 051-310-5400 | FAX 051-310-5429
        </div>
        <div style ={{display : 'inline-block' , size : "8px"}}>
            Copyright © 2020 Busan Metropolitan City Library, All rights reserved.
        </div>
      </div>
    </footer>
  );
}