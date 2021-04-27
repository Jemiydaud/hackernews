import React, { useEffect, useState } from 'react';
import axios from  'axios'; 
import './App.css';
import NewsList from './components/newsList';
import SearchBar from './components/searchBar';


function App() {
 const [news, setNews] = useState([])
 const [searchQuery, setSearchQuery] = useState('react')

  useEffect(() => {
    async function fetchNews() {
      try {
           axios.get(`http://hn.algolia.com/api/v1/search?query=${searchQuery}&tags=story`)
          .then((response) =>{ 
            const data = response.data.hits ;
            setNews(data);
            console.log(data)
          });
  } catch(error) {
      console.log("error", error);
      alert ('fatal error')}
    }
    fetchNews();

  },[searchQuery])

  function handleSearch() {
    setSearchQuery(input.value)
    console.log('hello')
  }

  return (
    <div className="App">

      <h1>I'm alive!!!</h1>
      <SearchBar search= {handleSearchS} />
      <NewsList news={news} /> 
      

    </div>

  )
}

export default App;

