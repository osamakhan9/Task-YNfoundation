import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from '../Page/Home'

function All_Route() {
  return (
	<div>
		<Routes>
			<Route path="/" element={<Home/>}></Route>
		</Routes>
	</div>
  )
}

export default All_Route