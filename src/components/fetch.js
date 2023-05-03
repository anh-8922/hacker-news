import React, {useState, useEffect} from "react";
import '../css/anh.css';
import { format } from "date-fns";
import a1 from '../images/a1.jpg';

export default function FetchNews() {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("react");
    const [text, setText] = useState("");
    const [headTitle, setHeadTitle] = useState ([]);
    const [loading, isLoading] = useState(true)
    useEffect( () => {
        const fetchHackerNews = async() => {
            const res = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
            const data = await res.json();
            setItems(data.hits);
            setHeadTitle(data.hits[0])
        }

        fetchHackerNews();
        isLoading(false)
    } , [query]

    )



    return(
        <div>
            <main>
                {loading ? (
                    <div className="spinner"></div>
                ) : (
                    <>
                        <article className="poll-card">
                            <div id="poll">
                                <h1 className="text-4xl font-bold text-red-700">{headTitle.title}</h1>
                                <a href={headTitle.url} target="_blank" rel="noreferrer">Read full article</a>
                                <p>Category: {query}</p>
                            </div>
                            <img src={a1} alt="picture of code"/>
                            
                        </article>
                        <article className="fetch-news">
                            {items.map(({author, created_at, title, url, objectID}) => (
                                    <div id="news-item" key={objectID}>
                                        <h1>{title}</h1>
                                        <a href={url} target="_blank" rel="noreferrer">Read full article</a>
                                        <p><span>By: </span>{author}</p>
                                        <p><span>Date: </span>{format(new Date(created_at), "dd-MM-yyyy")}</p>
                                    </div>
                                ))}
                        </article>
                           
                                          
                    </>
                )}
            </main>
            

            
        </div>
    )
}
