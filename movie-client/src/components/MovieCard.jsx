import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button} from '@mui/material'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
    
    const navigate = useNavigate()

    function reviews(movieId){
        navigate(`/Reviews/${movieId}`)
    }

  return (
    <div className="movie-card h-[550px]">
        <img className="max-h-[500px]" src={movie.poster}  alt="movieposter"/>
        <div className="mt-4">
            <h4 className="text-xl font-semibold">{movie.title}</h4>
            <div className="content">
                <div className="rating">
                <Button className="text-gradient bg-black text-blue-600" onClick={()=>reviews(movie.imdbId)}>Review</Button>                                    
                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                    <img src="./play-button.png" alt="Play Icon"/>
                </Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MovieCard
