import React, { useEffect, useState } from 'react';
import axios from  'axios'; 
import './App.css';
import NewsList from './components/newsList';
import SearchBar from './components/searchBar';


function App() {
 const [news, setNews] = useState([])
 const [searchQuery, setSearchQuery] = useState('react')
 const [isLoading,setIsLoading] = useState()
  useEffect(() => {
    async function fetchNews() {
      try {
           axios.get(`https://hn.algolia.com/api/v1/search?query=${searchQuery}&tags=story`)
          .then((response) =>{ 
            const data = response.data.hits ;

            if(data.length === 0) {
              setIsLoading(false);
              alert('no match found');
            } else

            {setNews(data);
            setIsLoading(false)}
          });
  } catch(error) {
      console.log("error", error);
      alert ('fatal error')}
    }
    fetchNews();

   // setInterval(fetchNews, 4000);

  },[searchQuery])

  function handleSearch(inputValue) {
    setSearchQuery(inputValue)
    
  }

  return (
    <div className="App">
<header>
  <h1>Hacker News!!!</h1>
  </header>
      <div className="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#" class="active">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
    </div>

      
      <SearchBar search= {handleSearch} />
      <NewsList 
      isLoading={isLoading}
      news={news} /> 
      
  <footer>
  <h1>Read The Latest Gist !!!</h1>
  </footer>

    </div>

  )
}

export default App;

