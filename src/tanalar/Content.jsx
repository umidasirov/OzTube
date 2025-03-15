import React, { useState } from 'react';
import axios from 'axios';

export default function Content({videoQuery,setVideoQuery,videos,setVideos,loading,setLoading,error,setError}) {

  return (
    <div>
      <h1>YouTube Video Qidirish</h1>
      
      {loading && <p>Yuklanmoqda...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {!loading && videos.length === 0 && !error && <p>Hech qanday video topilmadi.</p>}

      {!loading && videos.length > 0 && (
        <ul className='main-content-video'>
          {videos.map((video) => (
            <li key={video.id.videoId} style={{ marginBottom: '20px' }}>
              
              {/* YouTube video iframe */}
              <iframe 
                width="100%" 
                height="315" 
                src={`https://www.youtube.com/embed/${video.id.videoId}`} 
                title={video.snippet.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                ></iframe>
                <h2>{video.snippet.title}</h2>  
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
