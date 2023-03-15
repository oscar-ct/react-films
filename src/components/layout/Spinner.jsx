import spinner from "./assets/spinner2.gif";
import PropTypes from "prop-types";

const Spinner = ( {width} ) => {
    return (
            <div className="fixed left-4">
                <img
                    src={spinner}
                    alt="Loading..."
                    // className="text-center mx-auto"
                    width={width}
                />
            </div>


    );
};

Spinner.propTypes = {
    width: PropTypes.number.isRequired,
}

export default Spinner;