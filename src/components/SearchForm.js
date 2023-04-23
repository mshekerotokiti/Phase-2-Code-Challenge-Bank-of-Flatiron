import React from "react";

function SearchForm(setSearch, search){
    return (
        <form className="ui large fluid icon input">
          <input 
           onChange={(e) => setSearch(e.target.value)}  //targets values after key stroke
           placeholder="Search your Recent Transactions" 
           value={search} 
           type={"text"} />
           <i className="circular search link icon"></i>
        </form>
    );
}
export default SearchForm;