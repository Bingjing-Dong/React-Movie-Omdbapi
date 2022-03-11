const SearchMovie = (props) => {

	return (
		<div className='search'>
            <input type='search' placeholder='Enter movie title to search...' required value={props.value}
                onChange={(e) => props.setSearchTitle(e.target.value)} />
		</div>
	);
};

export default SearchMovie;