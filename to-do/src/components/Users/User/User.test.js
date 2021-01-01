import { render } from '@testing-library/react';
import User from './User';

describe('User', () => {
  it('Should take a snapshot', () => {
    const component = render(<User />);
    expect(component).toMatchSnapshot();
  })
})
