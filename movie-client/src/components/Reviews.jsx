import {useEffect,useRef} from 'react'
import {useParams} from 'react-router-dom'
import ReviewForm from './ReviewForm'
import axios from 'axios'

const Reviews = ({getMovieData,movie,reviews,setReviews}) => {

    const revText = useRef()
    let params = useParams()
    const movieId = params.movieId

    useEffect(()=>{
        getMovieData(movieId)
    },[])

    const addReview = async(e)=>{
        e.preventDefault()

        const rev = revText.current
        try{
            await axios.post("/api/v1/reviews",{reviewBody:rev.value,imdbId:movieId})
            const updatedReviews =[...reviews,{body:rev.value}]
            rev.value = ""
            setReviews(updatedReviews)
        }catch(e){
            console.log(e)
        }
    }

  return (
    <section className="mt-20 relative flex lg:flex-row flex-col max-container h-[100vh] b-0 overflow-hidden">
        <div className="mt-10 min-w-[35%] flex flex-col ml-10 items-center">
            <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h=[350px] rounded-xl">
                <img className="rounded-xl" src={movie?.poster} alt=""/>
            </div>
        </div>
        <div className="mt-10 flex-1 min-w-[50%] flex flex-col items-center">
            <h3 className="head-text">Review</h3>
            <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review"/>
        </div>
        {
            reviews?.map((review)=>{
                return(
                    <div className="mb-10">
                        <p>{review}</p>
                    </div>
                )

            })
        }
    </section>
  )
}

export default Reviews