import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  beforeEach(() => {
    render(<App />);
  });
  it('renders learn react link', () => {    
    const linkElement = screen.getByText('Hello');
    expect(linkElement).toBeInTheDocument();
  });

  it('should set value hi on button click', () => {
    const btnElement = screen.getByRole('button');
    fireEvent.click(btnElement);
    const textElement = screen.getByText('hi');
    expect(textElement).toBeInTheDocument();
  });
  
});
