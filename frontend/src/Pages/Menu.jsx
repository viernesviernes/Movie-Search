import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    return (
    <>
    <div className="hero">
        <h2>Welcome to</h2>
        <h1>The Movie Database</h1>
        <p>A comprehensive platform designed to provide detailed information about a wide range of movies.</p>
        <div className="search">
            <input type="text" onChange={(e) => {setSearch(e.target.value)}}/>
            <input type="button" value="Search" onClick={() => navigate(`/search?title=${search}&page=1`)} disabled={!search} />
        </div>
    </div>
    </>
    )
}

export default Menu