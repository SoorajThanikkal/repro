import React,{useEffect, useState} from 'react'
import './RawPost.css'
import Youtube from 'react-youtube'
import '../RawPost/RawPost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../axios'
function RawPost(props) {
  const[movies,setmovies] =useState([])
  const [urlId,setUrlId] =useState('')
  useEffect(() =>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setmovies(response.data.results)
    // }).catch(err=>{
    //   alert('network error')
    })
  },[props.url] )
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("array empty")
      }

    })
  }
  return (
    <div className='row'>
      <h2>{[props.title]}</h2>
      <div className='posters'>
        {movies.map((obj)=>
          <img  onClick={()=> handleMovie(obj.id)} className={props.isSmall ?'smallPoster':'poster'} alt='poster'  src={`${imageUrl+obj.backdrop_path}`}/> 
        )}
      </div>
      
      { urlId && <Youtube opts={opts} videoId={urlId.key}/>}

      {console.log(urlId.key)}

    </div>
  )
}

export default RawPost
