import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';
import CardDetails from './components/Cards/CardDetails';
import Cards from './components/Cards/Cards';
import Filters from './components/Filters/Filters';
import ActiveGiveaways from './components/Cards/ActiveGiveaways';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/Helpers/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/ggtracker' element={<Home />} />
          <Route path='/ggtracker/:id' element={<CardDetails />} />
        </Routes>
        <footer className='footer'>&copy; Copyright 2022 Evan Moon</footer>
      </div>
      </BrowserRouter>
  );
}

const Home = () => {
  let [platform, setPlatform] = useState('');
  let [type, setType] = useState('');
  let [filter, setFilter] = useState('');
  let [fetchedData, updateFetchedData] = useState([]);
  let API_URL = '';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
    }
  };

  if (platform === '' && type === '' && filter === '') {
    API_URL = 'https://gamerpower.p.rapidapi.com/api/giveaways';
  } else if (platform !== '' && type !== '' && filter !== '') {
    API_URL = `https://gamerpower.p.rapidapi.com/api/giveaways?platform=${platform}&type=${type}&sort-by=${filter}`;
  } else if (platform !== '' && type === '' && filter === '') {
    API_URL = `https://gamerpower.p.rapidapi.com/api/giveaways?platform=${platform}`;
  } else if (type !== '' && platform === '' && filter === '') {
    API_URL = `https://gamerpower.p.rapidapi.com/api/giveaways?type=${type}`;
  } else if (filter !== '' && platform === '' && type === '') {
    API_URL = `https://gamerpower.p.rapidapi.com/api/giveaways?sort-by=${filter}`;
  } else {
    API_URL = 'https://gamerpower.p.rapidapi.com/api/giveaways';
  }
  
  

  useEffect(() => {
    (async () => {
      let data = await fetch(API_URL, options).then(res => res.json()).catch(err => console.log(JSON.parse(err)));
      updateFetchedData(data);
    })()
  })
  
  return (
    <div className='App'>
      <div className="container">
        <div className="row">
          <ActiveGiveaways />
        </div>
        <div className="row">
          <h1 className='text-center fw-bold text-warning m-4'>Current Giveaways</h1>
          <Filters setPlatform={setPlatform} setType={setType} setFilter={setFilter} />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards fetchedData={fetchedData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
