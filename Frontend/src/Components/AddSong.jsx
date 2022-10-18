import React,{useState} from 'react';
import "./AddSong.css"
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AddSong = () => {
  const navigate= useNavigate()
  const [data, setData] = useState({
    name:"",
    dateOfRelease:"",
    cover:"",
  });
  const handleBack=()=>{
    navigate("/abc");
  }

// console.log(data);

function submitChange(e) {
  e.preventDefault();
  //console.log(data);
  axios({
    method: "POST",
    url: "http://localhost:8080/api/songs",
    data: data,
  })
    .then((response) => {
      
    alert("Song Added")
    })
    .catch((error) => {
      console.log(error);
    });
}

  function handleChange(event) {
    let value = event.target.value;

    setData({
      ...data,
      [event.target.name]: value,
    });
  } 
  const handleClick = ()=>{
    navigate("/addartist")
  } 

  return (
    <div>
        <div className='addsong'><h2>Adding a new Song</h2></div>
        <div className='addsong1'>
        <form className='addsongform' onSubmit={submitChange}> 
            <label className='song1'>Song Name</label> 
            <input type="text" name="name" value={data.name} onChange={handleChange} className='songname' /> <br />
            <label className='song1'>Date of Release</label> 
            <input type="text" name="dateOfRelease" value={data.dateOfRelease} onChange={handleChange} className='daterelease'/> <br />
            <label className='song1'>Artwork</label> 
            <input type="text" name="cover" value={data.cover} onChange={handleChange} className='file' placeholder='enter img url' /> <br />
            <label className='song1'>Artists</label> 
            <input type="text" name="artist" className='artists'/> 
            <button onClick={handleClick} className='addartist'>Add Artist</button> <br />
            <input type="submit"  className='Cancel' placeholder='submit'/>
            <button className='Save' onClick={handleBack}>Cancel</button>

        </form>
        </div>
    </div>
  )
}

export default AddSong