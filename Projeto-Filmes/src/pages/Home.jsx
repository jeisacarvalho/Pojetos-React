import {useState, useEffect} from "react"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data);
    }
    
    return (
        <div>Home</div>

    )
}
export default Home