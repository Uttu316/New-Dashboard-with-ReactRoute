import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Navbar = props => {

    useEffect(() => {
        window.$('.sidenav').sidenav();
    },[])

    return (
            <Fragment>
                <div className="nav-colors">
                    <Link to="#" data-target="slide-out" className="sidenav-trigger">
                        <i className="fas fa-th"></i>
                    </Link>
                    <Link to="#"><img src={require("../img/d64.png")} alt=""/></Link>
                    <Link to="#"><i className="fa fa-user-circle-o" style={{float:'right'}}></i></Link>
                    <Link to="#"><i className="fa fa-question-circle-o" style={{float:'right'}}></i></Link>
                </div>

                <ul id="slide-out" className="sidenav">
                    <li className="sidenav-item"><i className="fas fa-search"></i><input type="text" placeholder="New Search"/></li>
                   
                    <li className="sidenav-item"><i className="fa fa-bookmark-o"></i>
                        <Link className="waves-effect" to="#!">
                            <span>Bookmarked</span>
                        </Link>
                    </li>
                    <li className="sidenav-item"><i className="fas fa-desktop"></i>
                        <Link className="waves-effect" to="#!">
                            <span>Insights</span>
                        </Link>
                    </li>
                    <li className="sidenav-item"><i></i>
                        <Link className="waves-effect" to="#!">
                            <span>Help Center</span>
                        </Link>
                    </li>
                    <li className="sidenav-item"><i></i>
                        <Link className="waves-effect" to="#!">
                            <span>Share Feedback</span>
                        </Link>
                    </li>
                    <li className="sidenav-item"><i></i>
                        <Link className="waves-effect" to="#!">
                            <span>Product Tour</span>
                        </Link>
                    </li>
                </ul>
                
        </Fragment>
    )
}


export default Navbar
