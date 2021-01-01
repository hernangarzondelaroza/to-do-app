import { render } from '@testing-library/react';
import Users from './Users';

describe('Users', () => {
  it('Should take a snapshot', () => {
    const component = render(<Users />);
    expect(component).toMatchSnapshot();
  })
})
