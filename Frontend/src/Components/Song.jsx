import React from 'react';
import { useEffect } from 'react';
import './Style.css';
import axios from "axios"
import { useState } from 'react';


export const Song = () => {
  const [data,setData ] =useState([])
 
  useEffect(()=>{
    
    
       axios({
         method: "GET",
         url: "http://localhost:8080/api/songs",
       })
         .then((response) => {
         
         setData(response.data)
         })
         .catch((error) => {
           console.log(error);
         });
       
    
  },[])
  return (
    <div className='songdiv'>
        <div className='title'>
            <div className='title1'><p className='p'>Artwork</p></div>
            <div className='title1'><p className='p'>Song</p></div>
            <div className='title1'><p className='p'>Date of Release</p></div>
            <div className='title1'><p className='p'>Artists</p></div>
            <div className='title1'><p className='p'>Rate</p></div>
        </div>
        {data.map((i) =>( <div className='main'>
            <div className='main1'><img src={i.cover} alt="" /></div>
            <div className='main1'><p className='main1p'>{i.name}</p></div>
            <div className='main1'><p className='main1p'>{i.dateOfRelease}</p></div>
            <div className='main1'><p className='main1p'>{i.artist.name}</p></div>
            <div className='main1'><p className='main1p'>{i.rating}</p></div>
        </div>))}
       
        
    </div>
  )
}

