import React,{useState} from 'react';
import "./AddArtist.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const AddArtist = () => {
  const navigate=useNavigate();
  const [data, setData] = useState({
    name:"",
    dob:"",
    bio:"",
  });
  
  //console.log(data);
  function submitChange(e) {
    e.preventDefault();
    //console.log(data);
    axios({
      method: "POST",
      url: "http://localhost:8080/new/artist",
      data: data,
    })
      .then((response) => {
        
       alert("Artist Added");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const handleBack =()=>{
    navigate("/addSong")
  }
    function handleChange(event) {
      let value = event.target.value;
  
      setData({
        ...data,
        [event.target.name]: value,
      });
    }
  return (
    <div className='addArtist'>
        <div>
            <p>Add Artist</p>
        </div>
        <hr />
        <div>
            <form className='form' onSubmit={submitChange}>
                <label className='label1'>Artist Name</label>
                <input type="text" name="name" value={data.name} onChange={handleChange} className='aName' /> <br />
                <label className='label1'>Date of Birth</label>
                <input type="date"name="dob" value={data.dob} onChange={handleChange}className='date'/> <br />
                <label className='label1'>Bio</label>
                <input type="text" name="bio" value={data.bio} onChange={handleChange} className='bio'/> <br />
                <button className='cancel' onClick={handleBack}>Cancel</button>
                <input type="submit" className='done' />
            </form>
        </div>
    </div>
  )
  }

export default AddArtist