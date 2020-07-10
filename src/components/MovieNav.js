import React, { Component } from 'react';
import './MovieNav.scss';
import { Link, Route } from 'react-router-dom';
import Movie_All from './Movie_All';
import Movie_domestic from './Movie_domestic';
import Movie_oversea from './Movie_oversea';


class MovieNav extends Component {
    render() {
        return (
            <div className="MovieNav">
                Nav
            </div>
        );
    }
}

export default MovieNav;