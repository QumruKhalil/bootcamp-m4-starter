import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    state= {
        value: ''
    }

    searchBoxSubmitHandler = (e) => {
        e.preventDefault();  
        this.props.onSubmit(e.target.search.value);
    }

    handleSearchChange = (e) => {
        this.setState({ value: e.target.value })
    }
render() {
    const { value } = this.state;

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        name="search"
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        value={value}
                        onChange={this.handleSearchChange}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!value}
                >
                    Искать
                </button>
            </form>
        </div>
    );
}
}

export default SearchBox;