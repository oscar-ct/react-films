import spinner from "./assets/loadingGif.gif";

const LargeSpinner = () => {
    return (

        <div className="w-100 flex flex-col items-center mt-20">
            <div className="w-100 text-white text-4xl pb-20">Just A Sec!</div>
            <img
                src={spinner}
                alt="Loading..."
                // className="text-center mx-auto"
                width={300}
            />
        </div>
    )
}

export default LargeSpinner;