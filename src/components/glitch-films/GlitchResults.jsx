import { useContext, useEffect } from "react";
import glitchContext from "../context/glitch/GlitchContext";
import { getGlitchFilms } from "../context/glitch/GlitchActions";
import Spinner from "../layout/Spinner";
import GlitchItem from "./GlitchItem";
import { motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const GlitchResults = () => {

    const { dispatch, glitchFilms, isLoading } = useContext(glitchContext);

    useEffect(function () {
        const handleFetch = async () => {
            dispatch({
                type: "SET_LOADING"
            });
            const data = await getGlitchFilms();
            dispatch({
                type: "GET_GLITCH_FILMS",
                payload: data,
            });
        }
        handleFetch();
    }, [dispatch]);



    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 3,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToScroll: 1
                }
            }
        ]
    };


        if (!isLoading) {
            const watchlist = glitchFilms.filter(function(film) {
                return film.WatchList;
            });
            const favorites = glitchFilms.filter(function(film) {
                return film.Favorite;
            });
            return (
                <>
                    <div>
                        <div className="mt-6 mb-1">
                            <h1 className="text-2xl text-white">WatchList ({watchlist.length})</h1>
                        </div>
                        <Slider {...settings}>
                            {watchlist.map(function(film) {
                                return (
                                    <motion.div key={film.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                                        <GlitchItem key={film.id} film={film}/>
                                    </motion.div>
                                )
                            })}
                        </Slider>
                    </div>



                     <div>
                        <div className="mt-6 mb-1">
                            <h1 className="text-2xl text-white">Favorites ({favorites.length})</h1>
                        </div>
                        <Slider {...settings}>
                            {favorites.map(function(film) {
                                return (
                                    <motion.div key={film.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                                        <GlitchItem key={film.id} film={film}/>
                                    </motion.div>
                                )
                            })}
                        </Slider>
                    </div>
                </>
            );

        }
        else  {
            return <Spinner width={150}/>
        }


};

export default GlitchResults;