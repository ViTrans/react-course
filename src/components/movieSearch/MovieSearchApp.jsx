import axios from "axios";
import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import useDebounce from "../hooks/useDebounce";

const MovieSearchApp = () => {
  // https://api.themoviedb.org/3/search/movie?api_key=0d77d4a00d41dc0294ce678b39584abe&query="bat+man"
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const queryDebounce = useDebounce(query, 500);

  useEffect(() => {
    async function fetchData(queryDebounce) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=0d77d4a00d41dc0294ce678b39584abe&query='${queryDebounce}'`
      );
      if (response.data.results) {
        setMovies(response.data.results);
      }
    }
    fetchData(queryDebounce);
  }, [queryDebounce]);
  return (
    <div className="p-10 ">
      <div className="w-full max-w-[500px] mx-auto mb-20">
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Enter your content"
          className="w-full px-5 py-3 bg-transparent border border-blue-500 rounded-lg outline-none"
        />
      </div>
      <div className="grid grid-cols-3 gap-10 ">
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieItem data={movie} key={movie.id}></MovieItem>
          ))}
      </div>
    </div>
  );
};

export default MovieSearchApp;
