import React from 'react';
import { render } from '@testing-library/react';
import Toast from './Toast';

describe('Toast', () => {
  it('renders proper info type along with message prop', () => {
    const { getByText } = render(
      <Toast type='info' message='User pending action' />
    );
    expect(getByText('Info: User pending action')).toBeTruthy();
  });

  it('renders proper success type along with message prop', () => {
    const { getByText } = render(
      <Toast type='success' message='Updated members status' />
    );
    expect(getByText('Success: Updated members status')).toBeTruthy();
  });

  it('renders proper warning type along with message prop', () => {
    const { getByText } = render(
      <Toast type='warning' message='User has to be admin' />
    );
    expect(getByText('Warning: User has to be admin')).toBeTruthy();
  });

  it('renders proper error type along with message prop', () => {
    const { getByText } = render(
      <Toast type='error' message='Internal server error' />
    );
    expect(getByText('Error: Internal server error')).toBeTruthy();
  });

  it('does not render improper kudos type along with message prop', () => {
    const error = new Error("Value 'kudos' passed to Toast component in type prop is not valid. Should be 'info', 'success', 'warning' or 'error'");
    const renderList = () => {
      render(<Toast type='kudos' message='Keep rocking bro' />);
    };
    expect(renderList).toThrow(error);
  });
});


