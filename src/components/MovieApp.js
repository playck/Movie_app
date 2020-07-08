import React, { Component } from 'react';
import './MovieApp.scss'
import MovieNav from './MovieNav';
import MovieForm from './MovieForm';

class MovieApp extends Component {
    render() {
        return (
            <div className="MovieApp">
                <header>Movie</header>
                <div className="MovieApp_content">
                <MovieNav />
                <MovieForm />
                </div>
            </div>
        );
    }
}

export default MovieApp;