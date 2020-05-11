import { shallow } from 'enzyme';
import React from 'react';
import { AppRouter } from '..';

describe('App component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AppRouter routes={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
