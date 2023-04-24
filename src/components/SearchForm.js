import React from "react";

function SearchForm({setSearch, search}){
    return (
        <form id="search-form">
                <input onChange={e=>setSearch(e.target.value)} id="search" placeholder="Search Your Recent Transanctions" value={search} type={"text"}/>
            </form>
    );
}
export default SearchForm;