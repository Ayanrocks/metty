import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Layout } from 'antd';
import CityTextBar from './components/CityTextBar/CityTextBar';
import CardsCircleDisplay from './components/CardsCircleDisplay/CardsCircleDisplay';

const { Header, Footer, Content } = Layout;

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const getWeatherData = (location) => {
    if (location) {
      axios
        .get(`/api/v1/getForecast/${location}`)
        .then((r) => {
          const { data } = r;
          if (data && data.main) {
            setErrorMsg();
            const w = {
              name: data.name,
              temp: Math.floor(data.main.temp),
              humidity: Math.floor(data.main.humidity),
              feelsLike: Math.floor(data.main.feels_like),
              cloudiness: Math.floor(data.clouds.all),
              weatherType: data.weather[0].main,
              weatherIcon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
            };
            setWeatherData(w);
          }
          if (data === 'Request failed with status code 404')
            setErrorMsg(`City Not Found ${location}`);
        })
        .catch((e) => {
          console.error(e);
          setErrorMsg(e.message.data);
        });
    }
  };
  return (
    <div className="App">
      <Layout
        style={{
          height: '100vh',
          minHeight: '760px',
        }}
      >
        <Header
          style={{
            color: '#fff',
            fontSize: '32px',
            zIndex: 999,
          }}
        >
          Metty
        </Header>
        <Content>
          <Layout>
            <CityTextBar getWeatherData={getWeatherData} />
          </Layout>
          <Layout>
            {weatherData && Object.keys(weatherData).length > 0 && (
              <CardsCircleDisplay weatherData={weatherData} />
            )}
            {errorMsg && (
              <div
                style={{
                  backgroundColor: '#e83535',
                  padding: '5px',
                  minWidth: '250px',
                  fontSize: '2rem',
                  color: '#fff',
                  width: '20vw',
                  margin: '0 auto',
                }}
              >
                <p>{errorMsg}</p>
              </div>
            )}
          </Layout>
        </Content>
        <Footer
          style={{ zIndex: 999, color: '#ccc', backgroundColor: 'transparent' }}
        >
          Created by Ayan Banerjee
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
