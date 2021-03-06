import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('test button component', () => {
  it('should render the correct default button ', () => {
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-default');
  });
  it('should render the correct default button ', () => {});
});
