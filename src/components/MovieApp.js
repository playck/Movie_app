import React, { Component } from 'react';
import './MovieApp.scss'
import MovieForm from './MovieForm';

class MovieApp extends Component {
    render() {
        return (
            <div className="MovieApp">
                <header>Movie World</header>
                <div className="MovieApp_content">
                <MovieForm />
                </div>
            </div>
        );
    }
}

export default MovieApp;