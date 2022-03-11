import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navbar from '../Components/Navbar/Navbar';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

afterEach(cleanup);

describe('Snapshot of navigate component', () => {
  describe('handleClientChanged', () => {
    it('should  navigate back to home page', () => {
      const tree = renderer.create(<Navbar />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
