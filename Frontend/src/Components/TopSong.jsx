import React from 'react'
import AddSong from './AddSong'
import { Song } from './Song'
import TopArtist from './TopArtist'
import {useNavigate} from "react-router-dom"

export const TopSong = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/addsong")
  }
  return (
    <>
    <div>
    <div className="song">
           <h2 className="top">Top 10 Songs</h2>
           <button onClick={handleClick} className="add"><span className="plus">+</span>Add Song</button>
          
    </div>
    {/* <Song/> */}
    
    <TopArtist/>
   
    </div>
    </>
  )
}
