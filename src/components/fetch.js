import React, {useState, useEffect} from "react";
import '../css/anh.css';
import { format } from "date-fns";

export default function FetchNews() {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("programming");
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
                            <a href="#">Read full article</a>
                        </article>
                            {items.map(({author, created_at, title, url, objectID}) => (
                                <div key={objectID}>
                                    <h2>{title}</h2>
                                    <ul>
                                        <li>By: {author}</li>
                                        <li><a href={url}>Read full article</a></li>
                                    </ul>
                                </div>
                            ))}
                        <article className="card-news">
                            <h2></h2>
                            <ul>
                                <li>By</li>
                                <li><a>Read full article</a></li>
                            </ul>
                            <p>Date:</p>
                        </article>                    
                    </>
                )}
            </main>
            

            
        </div>
    )
}
