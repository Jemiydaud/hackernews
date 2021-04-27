import React from 'react';
import './news.css';

const Searchbar = ({keyword,setKeyword,search}) => {
  const BarStyling = {width:"20rem", height:"2rem", background:"#F2F1F9", border:"none", padding:"0.5rem"};

  return (
      <div>
    <input 
     type='search'
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search keyword"}
     //onChange={(e) => setKeyword(e.target.value)}
    />
    <button onClick = {search}>Search</button>
    </div>
  );
}


export default Searchbar