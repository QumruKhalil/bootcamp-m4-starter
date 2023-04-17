import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

class MainPage extends Component {
    state = {
        data: [],
        favourites: []
    }
    handleSearchChange = (value) => {
        fetch(`http://www.omdbapi.com/?apikey=6766068c&s=${value}`)
        .then(response => response.json())
        .then(data => this.setState({ data: data.Search }));
    }

    addToList = (movie) => {
        if (!this.state.favourites.some((m) => m.imdbID === movie.imdbID)) {
            this.setState({ favourites: this.state.favourites.concat(movie) })
        }
    }

    removeFromList = (id) => {
        this.setState({ favourites: this.state.favourites.filter((movie) => movie.imdbID !== id)})
    }

    render() { 
        return (
            <div className="main-page">
                <Header />
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox onSubmit={this.handleSearchChange} />
                        </div>
                        <div className="main-page__movies">
                            <Movies data={this.state.data} onAdd={this.addToList} />
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        <Favorites data={this.state.favourites} removeItem={this.removeFromList} />
                    </aside>
                </main>
            </div>
        );
    }
}
 
export default MainPage;