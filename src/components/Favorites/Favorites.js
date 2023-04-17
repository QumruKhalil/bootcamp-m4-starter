import React, { Component } from 'react';
import './Favorites.css';


class Favorites extends Component {
    render() { 
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.data.map((item) => {
                        return (
                            <li key={item.id}>
                                {item.Title} ({item.Year}){" "}
                                <button onClick={() => this.props.removeItem(item.imdbID)}>X</button>
                            </li>
                        );
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}
 
export default Favorites;