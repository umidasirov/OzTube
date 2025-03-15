import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Content from './Content'

export default function RoutesComponents({videoQuery,setVideoQuery,videos,setVideos,loading,setLoading,error,setError}) {
  return (
    <div className='routes'>
        <Routes >
            <Route element={<Content videoQuery={videoQuery} setVideoQuery={setVideoQuery} videos={videos} loading={loading} error={error} setError={setError} setLoading={setLoading} setVideos={setVideos}/>} path='/'/>
        </Routes>
    </div>
  )
}
