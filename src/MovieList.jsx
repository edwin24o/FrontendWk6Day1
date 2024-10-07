import React, { useState } from 'react'

const MoviesList = () => {
const [movies, setMovies] = useState([
    {title: "Interstellar", description:'An astronaut team explore space and the fabrics of time. Do we really know enough to think we have all the answers?'},
    {title: "IT", description:'Derry, a small town with strange occurences happening. The adults seem to be immune to the strangness of it all. Children are forced to act but what lurks under reality might be deeper than what they can imagine.'},
    {title: "Terminator", description:'A failed future and the only hope the human race has to survive is someone from the past. John is hunted down by a force not from this time to prevent and rewrite history.'},
]);

const [showDetails, setShowDetails] = useState({});

// view details
const toggleDetails = (title) => {
    setShowDetails((prevState) => ({
        ...prevState,
        [title]: !prevState[title],
    }));
};

// Remove a movie 
const removeMovie = (title) => {
    setMovies(movies.filter((movie) => movie.title !== title));
};

return (
    <div>
        <h2>Movie List</h2>
        <ul >
            {movies.map((movie, index) => (
                <li key={index}>
                    <span onClick={() => toggleDetails(movie.title)} style={{ cursor: 'pointer' }}>
                        {movie.title}
                    </span>
                    {showDetails[movie.title] && <p>{movie.description}</p>}
                    {/* Remove button */}
                    <button onClick={() => removeMovie(movie.title)}>Remove</button>
                </li>
            ))}
        </ul>
    </div>
);
};

export default MoviesList;