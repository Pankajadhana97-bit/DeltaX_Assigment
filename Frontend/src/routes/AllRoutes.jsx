import React from 'react'
import {Routes, Route} from "react-router"
import { Login } from '../Components/Login'
import { Signup } from '../Components/Signup'
import { TopSong } from '../Components/TopSong'
import AddSong from  "../Components/AddSong"
import AddArtist from '../Components/AddArtist'
import { PrivateRoute } from './PrivateRoute.jsx'

export const AllRoutes = () => {
  return (
   <Routes>
    {/* <Route path='/' element={<PrivateRoute><TopSong/></PrivateRoute>}/> */}
    <Route path='/abc' element={<PrivateRoute><TopSong/></PrivateRoute>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Signup/>}/>
    <Route path='/addsong' element={<AddSong/>}/>
    <Route path='/addartist' element={<AddArtist/>}/>
   </Routes>
  )
}
