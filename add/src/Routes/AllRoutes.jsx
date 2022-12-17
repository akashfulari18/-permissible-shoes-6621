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

function AllRoutes() {
  return (
    <div>
        

        <Routes>
            <Route path='/' element={<PrivateRoute><Home/> </PrivateRoute>}></Route>
            <Route path='myDeals' element={<PrivateRoute><MyDeals/></PrivateRoute>}></Route>
            <Route path='kindMoments' element={<KindMoments/>}></Route>
            <Route path='recipes' element={<PrivateRoute><Recipes/></PrivateRoute>}></Route>
            <Route path='directory' element={<Directory/>}></Route>
            <Route path='articles' element={<Articles/>}></Route>
            <Route path='mobileApp' element={<MobileApp/>}></Route>
            <Route path='help' element={<Help/>}></Route>
            <Route path='login' element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes