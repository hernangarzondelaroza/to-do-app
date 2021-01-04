import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should take a snapshot', () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  })
})
