import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
  it('Should take a snapshot', () => {
    const component = render(<Layout />);
    expect(component).toMatchSnapshot();
  })
})