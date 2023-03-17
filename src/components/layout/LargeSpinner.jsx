import spinner from "./assets/loadingGif.gif";

const LargeSpinner = () => {
    return (

        <div className="flex flex-col items-center mt-10">
            <div className="text-white text-4xl mt-10 pb-10">Just A Sec!</div>
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