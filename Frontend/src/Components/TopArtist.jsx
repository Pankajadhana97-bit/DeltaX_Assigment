import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"

const TopArtist = () => {
  const [data,setData ] =useState([])
  console.log(data);
 
  useEffect(()=>{
    
       axios({
         method: "GET",
         url: "http://localhost:8080/new/artists",
       })
         .then((response) => {
         //console.log(response);
         setData(response.data)
         })
         .catch((error) => {
           console.log(error);
         });
       
    
  },[])
  return (
    <div>
        <div className='top10'><h2 className='artist10'>Top 10 Artists</h2></div>
        <div>
                <div className='top10artist'>
                  <div><p className='p1'>Artist</p></div>
                  <div><p className='p1'>Date of Birth</p></div>
                  <div><p className='p1'>Song</p></div>
                </div>
                
                {data.map((i)=>(
                  <div className='top10artistrow'>
                  <div><p className='top10artistrow1'>{i.name}</p></div>
                  <div><p className='top10artistrow1'>{i.dob}</p></div>
                 
                    
                    <div><p className='top10artistrow12'> {i.song.map((index)=>(<span>{index},</span>))}</p></div>
                  
                  
              </div>
                ))}
                
             
                
                
        </div>
    </div>
  )
}

export default TopArtist