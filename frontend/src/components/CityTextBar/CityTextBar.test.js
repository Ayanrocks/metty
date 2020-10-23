import React from 'react';
import { shallow } from 'enzyme';

test('Link changes the class when hovered', () => {
  const component = shallow();
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
