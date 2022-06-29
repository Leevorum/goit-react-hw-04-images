import { useState } from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = evt => {
    setInput(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(input);
    setInput('');
  };

  return (
    <header className="Searchbar" onSubmit={handleSubmit}>
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          name="input"
          value={input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
