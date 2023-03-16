import {Link} from "react-router-dom";
import FilmSearch from "../omdb-films/FilmSearch";
import {motion} from "framer-motion";
import {FaHome, FaAddressCard} from "react-icons/fa";


const Navbar = () => {
    return (
        <>
            <div className="navbar bg-neutral text-neutral-content py-5">
                <div className="navbar-start">
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-black rounded-box w-52">
                            <li>
                                <Link to="/"><FaHome/>Home</Link>
                            </li>
                            <li>
                                <Link to="/"><FaAddressCard/>About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:flex">
                        {/*<ul className="menu menu-horizontal px-1">*/}
                        {/*    <li>*/}
                                <Link to="/">
                                    <button className="btn btn-ghost btn-circle ml-2">
                                        <FaHome className="text-2xl"/>
                                    </button>
                                </Link>
                            {/*</li>*/}
                            {/*<li>*/}
                                <Link to="/">
                                    <button className="btn btn-ghost btn-circle ml-2">
                                        <FaAddressCard className="text-2xl"/>
                                    </button>
                                </Link>
                            {/*</li>*/}
                        {/*</ul>*/}
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to="/">
                        <button className="btn btn-ghost normal-case text-black sm:text-3xl sm:text-white font-light">
                            <motion.div className="flex nav-logo-wrapper" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                                <span className="px-2">M</span>
                                <img className="nav-logo" src="https://www.freeiconspng.com/uploads/movie-icon-11.png" width="70" alt="" />
                                <span className="px-2">V</span>
                                <span className="px-2">I</span>
                                <span className="px-2">E</span>
                                <span className="px-2">S</span>
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
        </>
    );
}


export default Navbar;