import React, { useState } from 'react';
import { Button, Input } from 'antd';

export default function CityTextBar(props) {
  // findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Wave
  // which is inside StrictMode. This can be imporved by using a Form.Item element
  // To keep things simple this error is expected to happen.
  const [location, setLocation] = useState('');
  const handleSearch = () => {
    console.log(location);
    props.getWeatherData(location);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        width: '40vw',
        flexWrap: 'wrap',
        margin: '48px auto',
        alignItems: 'center',
        alignContent: 'center ',
        textAlign: 'center',
        zIndex: 2,
      }}
    >
      <Input
        style={{
          width: '440px',
          fontSize: '24px',
          height: '48px',
          minWidth: '180px',
          flex: 80,
        }}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
        allowClear
        placeholder="Enter full city name"
        defaultValue=""
      />
      <Button
        style={{
          fontSize: '20px',
          height: '48px',
          flex: 20,
        }}
        onClick={handleSearch}
      >
        Get Weather
      </Button>
    </div>
  );
}
