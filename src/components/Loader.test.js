import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

test('loader has class name of "lds-ring', () => {
    render(<Loader />);
    const loader = screen.getByTestId('loader-styling');
    expect(loader).toHaveClass('lds-ring');
});


