import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import FilmSearch from "../omdb-films/FilmSearch";
import {motion} from "framer-motion";



const Navbar = ( { title } ) => {
    return (
            <div className="navbar bg-black text-neutral-content pb-3 pt-4">
                <div className="navbar-start">
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/">Favorites</Link>
                            </li>
                            <li>
                                <Link to="/">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to="/">
                        <button className="btn btn-ghost normal-case text-black sm:text-3xl sm:text-white font-light">
                            <motion.div className="flex nav-logo" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                                <span className="px-2 pt-4">M</span>
                                <img src="https://www.freeiconspng.com/uploads/movie-icon-11.png" width="70" alt="" />
                                <span className="px-2 pt-4">V</span>
                                <span className="px-2 pt-4">I</span>
                                <span className="px-2 pt-4">E</span>
                                <span className="px-2 pt-4">S</span>
                                </motion.div>
                        </button>
                    </Link>
                </div>
                <div className="navbar-end">

                    <FilmSearch/>

                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"/>
                        </div>
                    </button>
                </div>
            </div>

    );
}

Navbar.defaultProps = {
    title:  "React Films",
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar;