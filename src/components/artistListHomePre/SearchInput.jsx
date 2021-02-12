/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

export default function SearchInput({ setSearch }) {

  return (
    <div>
      Search: <input type="text" onChange={({ target }) => setSearch(target.value)} />
      <p>
        Search Results:
        {/* <SearchDetails /> */}
      </p>
    </div>
  );
}

SearchInput.propTypes = {
  setSearch: PropTypes.func.isRequired
};
