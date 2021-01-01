import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('Should take a snapshot', () => {
    const component = render(<Header />);
    expect(component).toMatchSnapshot();
  })
})
