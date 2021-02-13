import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput component', () => {
    afterEach(() => cleanup());
    it('renders SearchInput', () => {
        const { asFragment } = render(<SearchInput
            input='my_search_query'
            onChange={jest.fn()}
            setSearch={jest.fn()}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});
