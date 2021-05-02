import React, {useState} from 'react';
import './news.css';

export default function Searchbar ( {search} ) {

  const [inputValue, setInputValue] = useState('')

  function handleInputValue({target}){
    setInputValue(target.value);
  
  }
 

  return (
      <div>
    <input type='search' value={inputValue} placeholder={"Search keyword"} onChange={handleInputValue}
    />
    <button onClick = {() => search(inputValue)}>
      Search</button>
    </div>
  );
}


