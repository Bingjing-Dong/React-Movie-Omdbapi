const MovieList = (props) => {

	return (
		<div className="content">
			{props.movies.map((movie, index) => (
				<div>
					<img src={movie.Poster} alt=''></img>
					<h3>Movie Title: {movie.Title}</h3>
					<p>Year: {movie.Year}</p>
					<p>Type: {movie.Type}</p>
				</div>
			))
			}
		</div>
	);
};

export default MovieList;