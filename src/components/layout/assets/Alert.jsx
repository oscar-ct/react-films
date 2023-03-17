import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const Alert = ( {alertType} ) => {
    return (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                {alertType === "success" &&
                    <div className="alert alert-success shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Message sent successfully</span>
                        </div>
                    </div>}
                {alertType === "standard" &&
                    <div className="alert shadow-lg">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            <div>
                               <span>Thanks for checking out my app!</span><span className={"pl-2"}>Experienced an issue?</span><span className={"pl-2"}>Send me a message.</span>
                            </div>
                        </div>
                        <div className="flex-none">
                            <Link to="/about">
                                <button className="btn btn-sm">Message</button>
                            </Link>
                        </div>
                    </div>}
            </motion.div>
    );
};

export default Alert;