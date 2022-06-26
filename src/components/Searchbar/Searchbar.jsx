import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = { input: '' };

  handleChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ input: '' });
  };

  render() {
    return (
      <header className="Searchbar" onSubmit={this.handleSubmit}>
        <form className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            name="input"
            value={this.state.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
