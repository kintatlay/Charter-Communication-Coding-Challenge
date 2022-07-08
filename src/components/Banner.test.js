import {render, screen} from '@testing-library/react';
import Banner from "./Banner";

test('it renders the given banner title', () => {
    render(<Banner />)
    expect(screen.getByText("Charter / Spectrum Front-End Code Challenge")).toBeInTheDocument()
})