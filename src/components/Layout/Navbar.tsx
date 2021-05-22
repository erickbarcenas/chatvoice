import React, {Fragment} from 'react';


const miFunction = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">L52+</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    {/*<div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink"
                                   role="button" data-toggle="dropdown" aria-expanded="false">
                                    EN
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <h6 className="dropdown-header">Language</h6>
                                    </li>
                                    <li><a className="dropdown-item" href="#">SP</a></li>
                                    <li><a className="dropdown-item" href="#">FR</a></li>
                                    <li><a className="dropdown-item" href="#">DE</a></li>
                                </ul>
                            </li>
                            <li className="nav-item ml-lg-3">
                                <a className="nav-link  text-light" href="#footer">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Log In</a>
                            </li>
                            <li className="nav-item dropdown   ml-lg-3 ">
                                <a className="nav-link dropdown-toggle text-light d-inline-block bg-orange rounded p-1 p-lg-2"
                                   href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown"
                                   aria-expanded="false">
                                    Sign Up
                                </a>
                                <ul className="dropdown-menu dropdown-menu-lg-right p-5 sign__container"
                                    aria-labelledby="navbarDropdownMenuLink">


                                    <h1 className="h4 mb-3 font-weight-normal text-center">Please sign in</h1>
                                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                                    <input type="email" id="inputEmail" className="form-control"
                                           placeholder="Email address" />
                                        <label htmlFor="inputPassword" className="sr-only ">Password</label>
                                        <input type="password" id="inputPassword" className="form-control mb-2"
                                               placeholder="Password" />
                                            <div className="checkbox mb-4">
                                                <label>
                                                    <input type="checkbox" value="remember-me"/> Remember me
                                                </label>
                                            </div>
                                            <button value={"Sign in"} className="btn btn-lg bg-orange btn-block text-light"
                                                    type="submit"/>
                                </ul>
                            </li>
                        </ul>
                    </div>*/}
                </div>
            </nav>
        </Fragment>
    )
}

export default miFunction;
