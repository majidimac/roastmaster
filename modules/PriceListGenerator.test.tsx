import { render, fireEvent, screen } from '@testing-library/react';
import { PriceListGenerator } from './PriceListGenerator';
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('PriceListGenerator', () => {
  it('should display the currency symbol', () => {
    render(<PriceListGenerator />);
    const addButton = screen.getAllByText('افزودن محصول')[0];
    fireEvent.click(addButton);
    const priceInput = screen.getByPlaceholderText('قیمت');
    fireEvent.change(priceInput, { target: { value: '1000' } });
    const currencySymbol = screen.getByText('تومان');
    expect(currencySymbol).toBeInTheDocument();
  });
});
