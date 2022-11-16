import React, { useState } from 'react'
import Head from "./Head";
import "./header.css";
import { Link, Router, BrowserRouter} from "react-router-dom";
  
export const Header = () => {
    const [navbar, setNavbar] = useState(false)
  return (
    <div>
        <Head/>
        
        <header>
            <div className="container paddingSmall">
                <nav>
                    <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
                    <BrowserRouter>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/culture">Culture</Link></li>
                        <li><Link to="/politics">Politics</Link></li>
                        <li><Link to="/memes">Memes</Link></li>
                        <li><Link to="/boxed">Boxed</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                    </BrowserRouter>
                    </ul>
                    <button className="barIcon" onClick={() => setNavbar(!navbar)}>
                        {navbar ?  <i className="fa-solid fa-times"></i> : <i className="fa fa-bars"></i>}
                       
                    </button>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header;