import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Articles from '../Pages/Articles'
import Directory from '../Pages/Directory'
import Help from '../Pages/Help'
import Home from '../Pages/Home'
import KindMoments from '../Pages/KindMoments'
import MobileApp from '../Pages/MobileApp'
import MyDeals from '../Pages/MyDeals'
import Recipes from '../Pages/Recipes'

function AllRoutes() {
  return (
    <div>
        

        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='myDeals' element={<MyDeals/>}></Route>
            <Route path='kindMoments' element={<KindMoments/>}></Route>
            <Route path='recipes' element={<Recipes/>}></Route>
            <Route path='directory' element={<Directory/>}></Route>
            <Route path='articles' element={<Articles/>}></Route>
            <Route path='mobileApp' element={<MobileApp/>}></Route>
            <Route path='help' element={<Help/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes