import './Header.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Header = (props) => {

    const [query, setQuery] = useState('');

    const handleSubmit = (event) =>{
      event.preventDefault();
      props.setSearchTerm(query);     
    }
    return (
        <div className="topnav">
            <div className="email-container">
                <form onSubmit={setQuery}>
                    <textarea type="text" placeholder="Email.." name="Email" onChange={setQuery}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="search-container">
                <form onSubmit = {handleSubmit} >
                    <input type='text' value={query} onChange={event => setQuery(event.target.value)} placeholder='search....' ></input>
                </form>
            </div>
        </div>
    )
}

export default Header;