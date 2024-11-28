import { Link, useSearchParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Card from './Card';

function Search() {
    const [searchParams, setSearchParams] = useSearchParams();

    // For the search bar
    const [search, setSearch] = useState(searchParams.get('title'));

    // Changes every time searched
    const [title, setTitle] = useState(searchParams.get('title'));
    const [max, setMax] = useState(1);

    // Changes every previous/next
    const [page, setPage] = useState(searchParams.get('page'));
    const [cards, setCards] = useState([]);

    // Data fetcher
    useEffect( () => {
        const fetchData = async () => {
            let [listArray, totalResults] = await fetch(`https://dramatic-cord-disclose.onrender.com/api/search?title=${title}&page=${page}&key=${import.meta.env.VITE_KEY}`)
            .then((response) => {
                return response.json();
            }).then((json) => {
                let lArray = json.Search.map((elem) => {
                    return elem;
                })
                return [lArray, json.totalResults]
            })
            setCards(listArray);
            setMax(Math.ceil(totalResults / 10));
        };

        fetchData();
    }, [searchParams])

    return (
    <>
    <input type="text" value={search} onChange={(e) => {setSearch(e.target.value)}} />
    <input type="button" value="Search" onClick={() => {setTitle(search); setSearchParams({ title: title, page: 1 });}} disabled={!search} />
    <p>Search results for {title}:</p>
    <div className='container'>
        {cards.map((elem) => (
            <Card img={elem.Poster} title={elem.Title} type={elem.Type} year={elem.Year} />
        ))}
    </div>
    <button>Previous</button> <button>Next</button><br />
    </>
    )
}

export default Search