import React, {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";
import '../css/anh.css';
import '../css/responsive.css';
import { format } from "date-fns";
import a1 from '../images/a1.jpg';

export default function FetchNews() {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("Vanilla JavaScipt");
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
//Add Pagination
    const [pageNum, setPageNum] = useState(0);
    const itemsPerPage = 8;
    const pagesVisited = pageNum * itemsPerPage;
    const pagesDisplay = items.slice(pagesVisited, pagesVisited + itemsPerPage);
//Add Page Counter
    const countPage = Math.ceil(items.length / itemsPerPage);
    const turnPage = ({selected}) => {
        setPageNum(selected);
    };    


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
                            {pagesDisplay.map(({author, created_at, title, url, objectID}) => (
                                    <div id="news-item" key={objectID}>
                                        <h1>{title}</h1>
                                        <a href={url} target="_blank" rel="noreferrer">Read full article</a>
                                        <p><span>By: </span><a href="#">{author}</a></p>
                                        <p><span>Date: </span>{format(new Date(created_at), "dd-MM-yyyy")}</p>
                                    </div>
                                ))}
                        </article>
                        <div className="pagination">
                            <ReactPaginate 
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={countPage}
                                onPageChange={turnPage}
                                containerClassName={"paginationBttns"}
                                previousLinkClassName={"previousBttn"}
                                nextLinkClassName={"nextBttn"}
                                disabledClassName={"paginationDisabled"}
                                activeClassName={"paginationActive"}
                            />
                        </div>
                        
                           
                                          
                    </>
                )}
            </main>
            

            
        </div>
    )
}
