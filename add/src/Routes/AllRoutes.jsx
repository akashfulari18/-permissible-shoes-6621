import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Articles from '../Pages/Articles'
import Directory from '../Pages/Directory'
import Help from '../Pages/Help'
import Home from '../Pages/Home'
import KindMoments from '../Pages/KindMoments'
import Login from '../Pages/Login'
import MobileApp from '../Pages/MobileApp'
import MyDeals from '../Pages/MyDeals'
import Recipes from '../Pages/Recipes'
import PrivateRoute from '../Pages/PrivateRoute'
import SingleCard from '../Pages/AriclesComponents/singleCard'

function AllRoutes() {
  return (
    <div>
        

        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='myDeals' element={<PrivateRoute><MyDeals/></PrivateRoute>}></Route>
            <Route path='kindMoments' element={<PrivateRoute><KindMoments/></PrivateRoute>}></Route>
            <Route path='recipes' element={<PrivateRoute><Recipes/></PrivateRoute>}></Route>
            <Route path='directory' element={<PrivateRoute><Directory/></PrivateRoute>}></Route>
            <Route path='articles' element={<PrivateRoute><Articles/></PrivateRoute>}></Route>
            <Route path='articles/:id' element={<PrivateRoute><SingleCard/></PrivateRoute>}></Route>
            <Route path='mobileApp' element={<PrivateRoute><MobileApp/></PrivateRoute>}></Route>
            <Route path='help' element={<PrivateRoute><Help/></PrivateRoute>}></Route>
            <Route path='login' element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes