import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth-user/UserContext";
import "./NavBar.css"

function NavBar ({logout}) {
    const {currUser} = useContext(UserContext);

    return (
        <div className="NavBar">
            <div className="NavBar-left">
                <Link className="NavBar-link-left" 
                    to="/">Jobly
                </Link>
            </div>
            <div className="NavBar-right">
                {currUser?
                // if user, show logged in navbar
                <div>
                    <Link className="NavBar-link-right" 
                    to="/companies">Companies
                    </Link>
                    <Link className="NavBar-link-right" 
                        to="/jobs">Jobs
                    </Link>
                    <Link className="NavBar-link-right" 
                        to="/profile">Profile
                    </Link>
                    <Link className="NavBar-link-right" 
                        to="/" 
                        onClick={logout}>Logout
                    </Link>  
                </div>  
                :
                // if not user, show default navbar
                <div>
                    <Link className="NavBar-link-right" 
                        to="/login">Login
                    </Link>
                    <Link className="NavBar-link-right" 
                        to="/signup">Sign Up
                    </Link>
                </div>
            }
            </div>
        </div>
    )
}

export default NavBar;