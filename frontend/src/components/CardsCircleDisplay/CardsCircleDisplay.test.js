import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardsCircleDisplay from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('CardsCircleDisplay component', () => {
  test('it renders and matches with snapshot', () => {
    const weatherMock = {
      name: 'Kolkata',
      temp: 24,
      humidity: 60,
      feelsLike: 28,
      cloudiness: 40,
      weatherType: 'Haze',
      weatherIcon: `http://openweathermap.org/img/w/u50n.png`,
    };
    const wrapper = shallow(<CardsCircleDisplay weatherData={weatherMock} />);
    expect(wrapper).toMatchSnapshot();
  });
});
