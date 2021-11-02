import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="blue">
                <div className="container">
                    <Link to="/">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;