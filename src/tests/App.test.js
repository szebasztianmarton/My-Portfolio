import React from 'react';
import { render } from '@testing-library/react';
import { test, expect } from '@jest/globals'; // eslint-disable-line no-restricted-imports
import App from '../App';

test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});