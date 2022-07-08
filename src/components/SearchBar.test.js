import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import SearchBar from './SearchBar';
import { act } from 'react-dom/test-utils';

it('SearchBar renders without crashing', () => {
    const div = createRoot(document.createElement('div'));
    div.render(<SearchBar ></SearchBar>)
})