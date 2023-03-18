import {Link} from "react-router-dom";
import FilmSearch from "../omdb-films/FilmSearch";
import {AnimatePresence, motion} from "framer-motion";
import {useContext, useState} from "react";
import Alert from "./assets/Alert";
import OMDbContext from "../context/omdb/OMDbContext";
import icon from "./assets/movie-icon-15142.png";




const Navbar = () => {

    const [alert, setAlert] = useState(true);
    const [alertMessage, setAlertMessage] = useState(false)
    const { isAlerting  } = useContext(OMDbContext);

    const handleClick = () => {
        setAlertMessage(true)
        // dispatch({
        //     type: "SET_ALERTING",
        //     payload: true
        // });
        setTimeout(function () {
            setAlertMessage(false);
            setAlert(false);
            // dispatch({
            //    type: "SET_ALERTING",
            //    payload: false
            // });
        }, 4000);
    }

    return (
        <>
            <div className="navbar bg-neutral/20 text-neutral-content py-6">
                <div className="navbar-start">
                    <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-black rounded-box w-52">
                            <li>
                                <Link to="/">
                                    {/*<FaHome/>*/}
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="20"
                                        width="20">
                                        <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                                    </svg>Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    {/*<FaAddressCard/>*/}
                                    <svg
                                        viewBox="0 0 1024 1024"
                                        fill="currentColor"
                                        height="22"
                                        width="22">
                                        <path d="M594.3 601.5a111.8 111.8 0 0029.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 00-74.6 126.1 8 8 0 008 8.4H407c4.2 0 7.6-3.3 7.9-7.5 3.8-50.6 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H661a8 8 0 008-8.4c-2.8-53.3-32-99.7-74.7-126.1zM512 578c-28.5 0-51.7-23.3-51.7-52s23.2-52 51.7-52 51.7 23.3 51.7 52-23.2 52-51.7 52zm416-354H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496z" />
                                    </svg>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:flex">
                        {/*<ul className="menu menu-horizontal px-1">*/}
                        {/*    <li>*/}
                            <Link to="/about">
                                <div className="flex justify-center items-center ">
                                    <button className="btn btn-ghost btn-circle">
                                        {/*<FaAddressCard className="text-2xl"/>*/}
                                        <svg
                                            viewBox="0 0 1024 1024"
                                            fill="currentColor"
                                            height="28"
                                            width="28">
                                            <path d="M594.3 601.5a111.8 111.8 0 0029.1-75.5c0-61.9-49.9-112-111.4-112s-111.4 50.1-111.4 112c0 29.1 11 55.5 29.1 75.5a158.09 158.09 0 00-74.6 126.1 8 8 0 008 8.4H407c4.2 0 7.6-3.3 7.9-7.5 3.8-50.6 46-90.5 97.2-90.5s93.4 40 97.2 90.5c.3 4.2 3.7 7.5 7.9 7.5H661a8 8 0 008-8.4c-2.8-53.3-32-99.7-74.7-126.1zM512 578c-28.5 0-51.7-23.3-51.7-52s23.2-52 51.7-52 51.7 23.3 51.7 52-23.2 52-51.7 52zm416-354H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zm-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120v496z" />
                                        </svg>
                                    </button>
                                    <span className="text-md hover:font-bold">Contact</span>
                                </div>
                            </Link>
                            <Link to="/">
                                <div className="flex justify-center items-center ml-4">
                                    <button className="btn btn-ghost btn-circle">
                                        {/*<FaHome className="text-2xl"/>*/}
                                        <svg
                                            viewBox="0 0 1024 1024"
                                            fill="currentColor"
                                            height="24"
                                            width="24"
                                        >
                                            <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                                        </svg>
                                    </button>
                                    <span className="text-md hover:font-bold">Home</span>
                                </div>
                            </Link>

                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <Link to="/">*/}
                            {/*        <button className="btn btn-ghost btn-circle ml-2">*/}
                            {/*            <FaAddressCard className="text-2xl"/>*/}
                            {/*        </button>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to="/">
                        <button className="btn btn-ghost normal-case text-black sm:text-3xl sm:text-white font-light">
                            <motion.div className="flex nav-logo-wrapper" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                                <span className="px-2">M</span>
                                <img className="nav-logo" src={icon} width="70" alt="O" />
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
                    <button className="btn btn-ghost btn-circle" onClick={handleClick}>
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            {alert && <span className="badge badge-xs badge-primary indicator-item"/>}
                        </div>
                    </button>
                </div>

            </div>
            <AnimatePresence>
            {alertMessage && alert &&
            <div className="lg:flex lg:justify-end">
                <div className="lg:w-1/2">
                    <Alert alertType="standard"/>
                </div>
            </div>}
            {isAlerting &&
            <div className="md:flex md:justify-end">
                <div className="lg:w-1/4 md:w-1/2">
                    <Alert alertType="warning"/>
                </div>
            </div>}

            </AnimatePresence>
        </>
    );
}


export default Navbar;