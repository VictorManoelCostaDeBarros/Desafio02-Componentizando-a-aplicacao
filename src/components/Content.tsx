import { MovieCard } from "./MovieCard";

import '../styles/content.scss';

interface Movies {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MovieProps {
  movies: Movies[]
  selectedGenre: string
}

export function Content(props: MovieProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {props.selectedGenre}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {props.movies.map((movie: Movies) => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}