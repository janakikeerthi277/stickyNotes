import './Header.css';
import {Link} from 'react-router-dom'

const Header = () =>{
    return (
        <div className="navbar">
            {/*  Logo*/}

            <div className="header_logo">
                <h2>Sticky Notes</h2>
            </div>

            {/* Root Actions Button */}

            <div className="header_links">
                <input placeholder="email"/>
                <input placeholder="search"/>
            </div>

        </div>
    )
}


export default Header;