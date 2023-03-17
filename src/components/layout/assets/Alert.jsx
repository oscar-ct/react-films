import {AnimatePresence, motion} from "framer-motion";

const Alert = () => {
    return (
        <AnimatePresence>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                <div className="toast-start">
                    <div className="alert alert-success">
                        <div>
                            <span>Message sent successfully.</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Alert;