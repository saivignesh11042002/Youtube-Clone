//import logo from './logo.svg';
//import {useState,useEffect} from 'react';
//import './App.css';
import Header from './components/header'
//import Thumbnail from './components/Thumbnail'
import VideoPlayer from './components/ViedoPlayet';
import HomePage from './components/HomePage';
//import Dummy from './components/dummy'
//import Routt from './components/Routt'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route, Switch, Link,Routes } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

const App = () => {
    /*const [selectedVideo, setSelectedVideo] = useState(null);
    const handleThumbnailClick = (video) => {
        console.log(video.creator.name)
        setSelectedVideo(video);
      };
      */
    const [videos, setVideos] = useState([]);
    const totalPages = 10; // Total number of pages

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const videoData = [];
            for (let page = 0; page < totalPages; page++) {
                const response = await fetch(`https://internship-service.onrender.com/videos?page=${page}`);
                const data = await response.json();
                //console.log(data)
                videoData.push(data.data.posts);
            }
            console.log(videoData)
            setVideos(videoData);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
        //console.log(videos);
    };

    return (
        
            
        <div className="App">
            <Header/>
            
            <Routes>
          <Route exact path="/" element={<HomePage videos={videos}/>} />
          <Route path="/videos" element={<VideoPlayer   />} />
        </Routes>
                
                </div>
               
    );
};

export default App;

