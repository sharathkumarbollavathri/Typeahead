import { fireEvent,render, screen } from '@testing-library/react';
import Typeahead from './components/TypeaHeadComponent';
test('Testing input field', () => {
  render(<Typeahead />);
  let checkInputPlaceHolder=screen.getByPlaceholderText("Type here...")
  expect(checkInputPlaceHolder).toBeInTheDocument()
});

test('Testing single Options', () => { 
    render(<Typeahead/>)
    let checkInputPlaceHolder=screen.getByPlaceholderText("Type here...")    
    fireEvent.change(checkInputPlaceHolder,{target:{value:"afg"}})
    let result=screen.getByText(/Afghanistan/i) 
    expect(result).toBeInTheDocument()
 })

 test('Testing multiple options', () => { 
  render(<Typeahead/>)
  let checkInputPlaceHolder=screen.getByPlaceholderText("Type here...")    
  fireEvent.change(checkInputPlaceHolder,{target:{value:"af"}})
  let result=screen.getAllByText((text)=>text.includes("Afghanistan") || text.includes("Central African Republic") || text.includes("South Africa")) 
  result.forEach(res=>
  expect(res).toBeInTheDocument()
  )
  })

  