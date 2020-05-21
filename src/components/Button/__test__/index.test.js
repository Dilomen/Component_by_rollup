import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
// import Button from '../index'
// describe()
test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  });