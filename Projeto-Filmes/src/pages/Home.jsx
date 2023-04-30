import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEI;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (URL) => {

        const res = await fetch(URL);
        const data = await res.json();

        console.log(data);
    };

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apikey}`;

       getTopRatedMovies(topRatedUrl)
    }, []);
    return <div>Home</div>;
};

export default Home;