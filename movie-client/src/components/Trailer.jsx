import React from 'react'
import {useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
 
const Trailer = () => {
    let params = useParams()
    let key = params.ytTrailerId
  return (
    <div className="flex justify-center w-[100%] h-[100%] items-center mt-10">
        {(key!=null)?<ReactPlayer controls={true} playing={true} src={`https://www.youtube.com/watch?v=${key}`} width='75%' height='550px'/>:null}
    </div>
  )
}

export default Trailer