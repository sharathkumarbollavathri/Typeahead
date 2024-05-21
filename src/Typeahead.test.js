import { render, screen, fireEvent } from '@testing-library/react';
import Typeahead from './components/TypeaHeadComponent';
import {act} from 'react'


test('Testing input field', () => {
  render(<Typeahead />);
  const checkInputPlaceHolder = screen.getByPlaceholderText("Type country names here...");
  expect(checkInputPlaceHolder).toBeInTheDocument();
});

test('Testing single option', () => {
  render(<Typeahead />);
  const checkInputPlaceHolder = screen.getByPlaceholderText("Type country names here...");
  
  act(() => {
    fireEvent.change(checkInputPlaceHolder, { target: { value: "afg" } });
  });

  const result = screen.getByText(/Afghanistan/i);
  expect(result).toBeInTheDocument();
});

test('Testing multiple options', () => {
  render(<Typeahead />);
  const checkInputPlaceHolder = screen.getByPlaceholderText("Type country names here...");
  
  act(() => {
    fireEvent.change(checkInputPlaceHolder, { target: { value: "af" } });
  });

  const results = screen.getAllByText((text) => 
    text.includes("Afghanistan") || text.includes("Central African Republic") || text.includes("South Africa")
  );

  results.forEach(result => {
    expect(result).toBeInTheDocument();
  });
});
