import React from "react"
import "./Navbar.css"

const Navbar = () => (
          <nav>
            <div className="nav-header flex-item">
              <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="cargando" />
            </div>
            <div className="flex-item nav-links ">
              <span>Home</span>
              <span>About</span>
              <span>Contact</span>
              <span>Blog</span>
              <span>Careers</span>
            </div>
            <div className="flex-item nav-button ">
              <button>Request Invite</button>
            </div>
            <div className="flex-item nav-button-movile">
              &#9776;
             </div>
          </nav>
        )

export default Navbar