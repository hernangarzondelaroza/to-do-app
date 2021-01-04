import { render } from '@testing-library/react';
import Todo from './Todo';

describe('Todo', () => {
  it('Should take a snapshot', () => {
    const component = render(<Todo />);
    expect(component).toMatchSnapshot();
  })
})
