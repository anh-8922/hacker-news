import React, {useState, useEffect} from "react";
import '../css/anh.css';
import { format } from "date-fns";

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
                        <article className="card-news">
                            <h1>{headTitle.title}</h1>
                            <a href={headTitle.url} target="_blank" rel="noreferrer">Read full article</a>
                            <p>Category: {query}</p>
                        </article>
                        <article>
                            {items.map(({author, created_at, title, url, objectID}) => (
                                    <div key={objectID}>
                                        <h2>{title}</h2>
                                        <ul>
                                            <li>By: {author}</li>
                                            <li><a href={url} target="_blank" rel="noreferrer">Read full article</a></li>
                                        </ul>
                                        <p>Date: {format(new Date(created_at), "dd-MM-yyyy")}</p>
                                    </div>
                                ))}
                        </article>
                           
                                          
                    </>
                )}
            </main>
            

            
        </div>
    )
}
