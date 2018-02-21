const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const server = express();

sever.use(bodyParser.json());

server.use(CORS());

const movies = [
	{
		id: 0,
		title: 'The Godfather',
		director: 'Francis Ford Coppola',
		metascore: 100,
		stars: ['Marlon Brando', 'Al Pacino', 'Robert Duvall'],
	},
	{
		id: 1,
		title: 'Star Wars',
		director: 'George Lucas',
		metascore: 92,
		stars: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
	},
	{
		id: 2,
		title: 'The Lord of the Rings: The Fellowship of the Ring',
		director: 'Peter Jackson',
		metascore: 92,
		stars: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
	},
];

server.get('/api/movies', (req, res) => {
  res.send(movies);
});

server.get('/api/movies/:id', (req, res) => {
  const movie = movies.filter(movie => movie.id.toString() === req.params.i)[0];
  res.status(200).json(movies);
});

server.post('/api/movies', (req, res) => {
  if (req.body.id !== undefined) movies.push(req.body);
  res.status(201).json(movies);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});