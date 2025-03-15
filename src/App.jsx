import './App.scss'
import { colors } from './constant/colors'
import Header from './tanalar/Header'
import Navbar from './tanalar/navbar'
import { Stack } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import RoutesComponents from './tanalar/RoutesComponents'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [videoQuery, setVideoQuery] = useState('');  // Video nomi
  const [videos, setVideos] = useState([]);  // Videolarni saqlash
  const [loading, setLoading] = useState(false);  // Yuklanmoqda holati
  const [error, setError] = useState('');  // Xatolik holati
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  // Video qidirish funktsiyasi
  const fetchVideos = async (query) => {
    setLoading(true);
    setError('');  // Xatolikni tozalash

    try {
      if (!query) {
        // Agar video nomi bo'lmasa, tavsiya etilgan videolarni olish
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
          params: {
            key: apiKey,
            chart: 'mostPopular',  // Eng mashhur videolarni olish
            part: 'snippet',
            regionCode: 'US',  // Sizning hududingizni o'zgartirishingiz mumkin
            maxResults: 10,
          },
        });

        setVideos(response.data.items);  // Tavsiya etilgan videolarni saqlash
      } else {
        // Agar video nomi bo'lsa, qidiruvni amalga oshirish
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
          params: {
            key: apiKey,
            q: query,
            part: 'snippet',
            type: 'video',
            maxResults: 10,
          },
        });

        setVideos(response.data.items);  // Videolarni saqlash
      }
    } catch (err) {
      setError('Xatolik yuz berdi: ' + err.message);
    }

    setLoading(false);
  };

  const handleQueryChange = (e) => {
    const query = e.target.value;
    setVideoQuery(query);

    // Foydalanuvchi har bir o'zgartirishda qidirish
    fetchVideos(query);
  };

  useEffect(() => {
    // Dastlabki qidiruv bo'sh bo'lsa, tavsiya etilgan videolarni yuklash
    if (!videoQuery) {
      fetchVideos('');
    }
  }, [videoQuery]);

  return (
    <Stack sx={{ background: colors.secondary }} className='App'>
      <Header videoQuery={videoQuery} setVideoQuery={setVideoQuery} handleQueryChange={handleQueryChange} />
      <Navbar />
      <RoutesComponents
        videoQuery={videoQuery}
        setVideoQuery={setVideoQuery}
        videos={videos}
        loading={loading}
        error={error}
        setError={setError}
        setLoading={setLoading}
        setVideos={setVideos}
      />
    </Stack>
  );
}

export default App;
