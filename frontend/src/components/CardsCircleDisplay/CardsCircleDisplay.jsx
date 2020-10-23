import React from 'react';

export default function CardsCircleDisplay(props) {
  const { weatherData } = props;
  console.log(props);
  return (
    <div
      style={{
        margin: '32px auto',
        zIndex: 2,
      }}
    >
      <div
        style={{
          padding: '20px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          textAlign: 'center',
          boxShadow: '0 2px 5px rgba(0,0,0,0.4)',
          backgroundColor: '#eee',
          opacity: '57%',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: '#000',
            }}
          >
            {weatherData.name}
          </h1>
        </div>
        <div
          style={{
            height: '120px',
            margin: 0,
          }}
        >
          <p
            style={{
              fontSize: 84,
              color: '#000',
            }}
          >
            {weatherData.temp}&#176;
            <span style={{ fontSize: 64 }}>C</span>
          </p>
        </div>
        <div>
          <p style={{ fontSize: 16, color: '#000' }}>
            Feels Like: {weatherData.feelsLike}&#176;C
          </p>
        </div>
        <div>
          <p style={{ fontSize: 16, color: '#000' }}>
            Humidity: {weatherData.humidity}%
          </p>
        </div>

        <div>
          <p style={{ fontSize: 16, color: '#000' }}>
            Cloudiness: {weatherData.cloudiness}%
          </p>
        </div>
        <div>
          <p style={{ fontSize: 19, color: '#000' }}>
            {weatherData.weatherType}
          </p>
        </div>
      </div>
    </div>
  );
}
