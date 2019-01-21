import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import App from '../js/containers/App';
import AppNotifications from '../js/containers/AppNotifications';
import store from '../store';

Enzyme.configure({ adapter: new Adapter() })

describe('<App />', () => {
  const component = shallow(<App />);
  it('renders 1 <App /> component', () => {
    expect(component).to.have.length(1);
  });
});

describe('<AppNotifications />', () => {
  let component = null;
  it('renders 1 <AppNotifications /> component', () => {
    component = shallow(<AppNotifications store={store} />);
    expect(component).to.have.length(1);
  });
});

