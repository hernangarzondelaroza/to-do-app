import { render } from '@testing-library/react';
import Todos from './Todos';

describe('Todos', () => {
  it('Should take a snapshot', () => {
    const component = render(<Todos />);
    expect(component).toMatchSnapshot();
  })
})
