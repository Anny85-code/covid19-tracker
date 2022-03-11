import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DetailItems from '../Components/DetailItems/DetailItems';
import ItemItems from '../Components/ItemItems/ItemItems';
import Loader from '../Components/Spinner/Spinner';

afterEach(cleanup);

describe('Snapshot of covid19 data', () => {
  it('Snapshot of ItemItems Component', () => {
    const tree = renderer.create(<ItemItems />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Snapshot of DetailItems Component', () => {
    const tree = renderer.create(<DetailItems />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Snapshot of Spinner Component', () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
