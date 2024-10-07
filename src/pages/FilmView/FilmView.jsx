import './FilmView.css'
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import data from '../../movies.json';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';

function FilmView (){

    const{ title } = useParams();
    const movieTitle= title;
    const selectedMovie = data.find((movie) => movie.title === movieTitle);

return(
    <>
    <Header />
    <div className='movie-container'>
        <MovieInfo movie = { selectedMovie }  />
    </div>
    </>
)

   
}
export default FilmView;