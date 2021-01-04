import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('Should take a snapshot', () => {
    const component = render(<Footer />);
    expect(component).toMatchSnapshot();
  })
})
