import React, { Component } from 'react';
import axios from 'axios';

export default class MovieCard extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    const id = 1;
    axios
      .get(`http://localhost:500/api/movies/${id}`)
      .then(response => this.setState(() => { movie: resonse.data }))
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if(!this.state.movie) {
      return <div>Loading movie information...</div>
    }

    const { title, director, metascore, stars } = this.state.movie;
    return(
      <div>
        <h2>{title}</h2>
        <div>
          Director: <em>{director}</em>
        </div>
        <div>
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
        {stars.map(star => (
          <div key={star}>
            {star}
          </div>
        ))}
      </div>
    );
  }
}