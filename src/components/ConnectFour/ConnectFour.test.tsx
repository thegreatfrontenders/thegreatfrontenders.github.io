import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ConnectFour from './ConnectFour';

describe('<ConnectFour />', () => {
  test('it should mount', () => {
    render(<ConnectFour />);
    
    const connectFour = screen.getByTestId('ConnectFour');

    expect(connectFour).toBeInTheDocument();
  });
});