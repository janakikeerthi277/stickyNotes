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

            <ul className="header_links">
                <li>
                {/*
                    <Link to="/cart">
                    Cart
                    <span className="cartlogo_badge">0</span>
                    </Link>

                    <li>
                    <Link to="/cart">
                    Cart
                    <span className="cartlogo_badge">0</span>
                    </Link>
                    </li>


                */}

                </li>
            </ul>

        </div>
    )
}


export default Header;