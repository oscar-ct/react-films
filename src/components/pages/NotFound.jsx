import {Link} from "react-router-dom";


const NotFound = () => {
    return (
        <div className="hero no-results text-white w-full flex justify-center items-start">
            <div className="text-center hero-content">
                <div className="max-w-lg">
                    <h1 className="text-8xl font-bold mb-8 mt-16"> Oops!
                    </h1>
                    <p className="text-5xl mb-8">
                        404 - Page not found!
                    </p>
                    <Link  to="/" className="btn btn-primary btn-md text-lg">
                        <svg
                            viewBox="0 0 1024 1024"
                            fill="currentColor"
                            height="20"
                            width="20">
                            <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
                        </svg>
                        <span className="pl-3">Back To Home</span>
                    </Link>

                    <div className="flex justify-center pt-16">
                        <svg
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="125"
                            width="125"
                        >
                            <path d="M9 11.71l.29-.3.29.3a1 1 0 001.42 0 1 1 0 000-1.42l-.3-.29.3-.29a1 1 0 00-1.46-1.42l-.29.3-.25-.3a1 1 0 10-1.46 1.42l.3.29-.3.29a1 1 0 000 1.42 1 1 0 001.42 0zm-.6 3.62a1 1 0 00-.13 1.4 1 1 0 001.41.13 3.76 3.76 0 014.72 0 1 1 0 001.41-.13 1 1 0 00-.13-1.4 5.81 5.81 0 00-7.32 0zM12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm5-11.71a1 1 0 00-1.42 0l-.29.3-.29-.3a1 1 0 00-1.42 1.42l.3.29-.3.29a1 1 0 000 1.42 1 1 0 001.42 0l.29-.3.29.3a1 1 0 001.42 0 1 1 0 000-1.42l-.3-.29.3-.29a1 1 0 000-1.42z" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NotFound;