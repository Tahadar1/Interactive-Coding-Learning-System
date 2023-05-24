import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import ListVideo from '../Components/Video Player/ListVideo'

const ListVideoPage = () => {
  return (
    <div className="app">
      <div className="AppGlasws">
        <Sidebar />
        <ListVideo /> 
      </div>
    </div>
  )
}

export default ListVideoPage