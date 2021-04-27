import React from "react";
import './news.css';

export default function NewsList({news}) {
   console.log(news)
    return(
        <> 
            <ul>
                {news.length !== 0 && news.map((newItem) =>(
                    <li key={newItem.objectID}>
                      <a href={newItem.url} >  <h2>{newItem.title}</h2> </a>
                    </li>
                ))}
            </ul>


        </ >
    )

}