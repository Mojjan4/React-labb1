import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    
    state = {clicked: false};

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }; 

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React <i className="fab fa-react"></i></h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <Link className="nav-links" to="/">
                        <li>Home</li>
                    </Link>
                    <Link className="nav-links" to="/brewers">
                        <li>Brewers</li>
                    </Link>
                    <Link className="nav-links"to="/contact">
                        <li>Contact Me</li>
                    </Link>
                    <Link className="nav-links" to="/about">
                        <li>About Me</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar