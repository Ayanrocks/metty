import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CityTextBar from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('CityTextBar component', () => {
  test('it renders', () => {
    const wrapper = shallow(<CityTextBar />);
    expect(wrapper.exists()).toBe(true);
  });

  test('it search text is echoed', () => {
    const wrapper = shallow(<CityTextBar getWeatherData={() => {}} />);

    wrapper.find('Input').simulate('change', {
      target: { value: 'kolkata' },
    });
    expect(wrapper.find('Input').props().value).toEqual('kolkata');
  });
});
