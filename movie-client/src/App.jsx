import './App.css'
//import api from './api/axiosConfig'
import Layout from './components/Layout'
import {Routes,Route} from 'react-router-dom'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Trailer from './components/Trailer'
import Reviews from './components/Reviews'
import NotFound from './components/NotFound'

function App() {

  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState()
  const [reviews, setReviews] = useState()

  const getMovies = async () => {
    try{
      const response = await axios.get('/api/v1/movies')
      
      setMovies(response.data)
    }catch(e){
      console.log(e)
    }
  }

  const getMovieData = async(movieId)=>{
    const response = await axios.get(`/api/v1/movies/${movieId}`)
    const movie = response.data
    setMovie(movie)

    setReviews(movie.reviews)
  }

  useEffect(()=>{
    getMovies()
  },[])

  return (<div className="text-amber-50">
    <Header/>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home movies={movies}/>}/>
      <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
      <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews = {setReviews}/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      </Route>
    </Routes>
  </div>
  )
}

export default App
