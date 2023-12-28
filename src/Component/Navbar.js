import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand mx-auto" to="/">
                            WIZKIDS
                        </Link>
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        ></button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav ms-auto justify-content-between">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/" aria-current="page">
                                        Home
                                    </Link>
                                </li>

                                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                    <ul class="navbar-nav">
                                        <li class="nav-item dropdown">
                                            <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                Subjects
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-dark">
                                                <li><Link class="dropdown-item" to="/student">Maths</Link></li>
                                                <li><Link class="dropdown-item" to="/student">Physics</Link></li>
                                                <li><Link class="dropdown-item" to="/student">Chemistry</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <li className="nav-item mx-2">
                                    <Link className="nav-link active" to="/About">
                                        About Us
                                    </Link>
                                </li>



                                <li className="nav-item mx-2">
                                    <Link className="nav-link active" to="/">
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>

        </div>
    );
}



export default Navbar;