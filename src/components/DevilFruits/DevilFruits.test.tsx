import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DevilFruits from './DevilFruits';

describe('<DevilFruits />', () => {
  test('it should mount', () => {
    render(<DevilFruits />);
    
    const devilFruits = screen.getByTestId('DevilFruits');

    expect(devilFruits).toBeInTheDocument();
  });
});