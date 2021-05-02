import React from "react";
import './news.css';
import Loader from './Loader.js';

export default function NewsList({news, isLoading}) {

    return isLoading ? (
        <Loader /> 
    ) : (
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