import React from 'react'
import Head from "./Head";
import "./header.css";
import { Link, Router, BrowserRouter} from "react-router-dom";
  
export const Header = () => {
  return (
    <div>
        <Head/>
        
        <header>
            <div className="container paddingSmall">
                <nav>
                    <ul>
                    <BrowserRouter>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/culture">Culture</Link></li>
                        <li><Link to="/politics">Politics</Link></li>
                        <li><Link to="/memes">Memes</Link></li>
                        <li><Link to="/boxed">Boxed</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                    </BrowserRouter>
                    </ul>
                    <button className="barIcon">
                        <i className="fa fa-bars"></i>
                    </button>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header;