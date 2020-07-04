import React from 'react'

const Navbar = () => {
    return (
            <nav class="navbar navbar-light bg-white" style={{zIndex : '2'}}>
                <a class="navbar-brand" href="#"><img src="images/caramelproducts.jpeg" width="200px" /></a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link btn btn-primary p-3 text-white hov" href="/">Home</a>
                    </li>
                </ul>
            </nav>
    )
}
export default Navbar;