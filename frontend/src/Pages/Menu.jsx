import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    return (
    <>
    <input type="text" onChange={(e) => {setSearch(e.target.value)}}/>
    <input type="button" value="Search" onClick={() => navigate(`/search?title=${search}&page=1`)} disabled={!search} />
    </>
    )
}

export default Menu