import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DevilFruitFinder from './DevilFruitFinder';

describe('<DevilFruitFinder />', () => {
  test('it should mount', () => {
    render(<DevilFruitFinder />);
    
    const devilFruitFinder = screen.getByTestId('DevilFruitFinder');

    expect(devilFruitFinder).toBeInTheDocument();
  });
});