import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'
import App from '../js/containers/App'
import AppNotifications from '../js/containers/AppNotifications'
import Welcome from '../js/containers/Welcome'
import Game from '../js/containers/Game'
import Tiles from '../js/components/Tiles'
import Stats from '../js/containers/Stats'
import Header from '../js/components/Header'
import StatsTable from '../js/components/StatsTable'
import store from '../store'

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

describe('<Header />', () => {
  let component = null;
  it('renders 1 <Header /> component', () => {
    component = shallow(<Header store={store} />);
    expect(component).to.have.length(1);
  });
});


describe('<Welcome />', () => {
  let component = null;
  it('renders 1 <Welcome /> container', () => {
    component = shallow(<Welcome store={store} />);
    expect(component).to.have.length(1);
  });
});

describe('<Game />', () => {
  let component = null;
  it('renders 1 <Game /> container', () => {
    component = shallow(<Game store={store} />);
    expect(component).to.have.length(1);
  });
});

describe('<Tiles />', () => {
  let component = null;
  it('renders 1 <Tiles /> component', () => {
    component = shallow(<Tiles store={store} />);
    expect(component).to.have.length(1);
  });
});

describe('<Stats />', () => {
  let component = null;
  it('renders 1 <Stats /> container', () => {
    component = shallow(<Stats store={store} />);
    expect(component).to.have.length(1);
  });
});

describe('<StatsTable />', () => {
  let component = null;
  it('renders 1 <StatsTable /> component', () => {
    component = shallow(<StatsTable stats={store.getState().stats} />);
    expect(component).to.have.length(1);
  });
});

