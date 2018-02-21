import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class MovieList extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/movies`)
      .then(response => { 
        this.setState(() => ({ movies: response.data })
      )})
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieCard({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <Link to={`/movies/${movie.id}`}>
      <div>
        <h2>{title}</h2>
        <div> Director: <em>{director}</em></div>
        <div>Metascore: <strong>{metascore}</strong></div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star}>
            {star}
          </div>
        ))}
      </div>
    </Link>
  );
}