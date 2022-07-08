import App from './App';
import Banner from './components/Banner';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('Parent Component', () => { 
  it('renders Child component', () => { 
     const wrapper = shallow(<App />); 
     expect(wrapper.find(Banner).length).toEqual(1);
});
});                