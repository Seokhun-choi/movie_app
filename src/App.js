import React from "react";
import "./App.css";
import Movie from "./Movie";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="movies">
        <div className="movies__movie">
          {isLoading ? (
            <div className="movies__Loading">Loading...</div>
          ) : (
            <div className="movies">
              {console.log(movies)}
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  year={movie.year}
                  rating={movie.rating}
                  genres={movie.genres}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default App;
