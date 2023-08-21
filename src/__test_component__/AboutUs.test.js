import { render, screen, fireEvent} from '@testing-library/react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import AboutUs from '../Components/AboutUs';

test('renders learn react link', () => {
  const view= render(<Router>
                    <AboutUs></AboutUs>  
                   </Router>
                   );
  const linkElement = screen.getByText("Shopping.com →",{exact:false});
  expect(linkElement).toBeInTheDocument()
  expect(view.getByText(/Get Started/i)).not.toBeDisabled(); 
  fireEvent.click(view.getByText(/Get Started/i)) 
  expect(view.getByText(/Get Started/i)).toBeDisabled(); 
  
});
