import React, { Component } from 'react';
import './MovieForm.scss'
import { Link, Route } from 'react-router-dom';
import Movie_All from './Movie_All';
import Movie_domestic from './Movie_domestic';
import Movie_oversea from './Movie_oversea';


class MovieForm extends Component {
    state = {
        text: '',
        filterData : []
    }

    handleTitle = (text) => {
        const { Movies } = this.state
        this.setState({
            filterData: Movies.filter ( movie => {
                const regexp = new RegExp( text , 'i')
                return movie.title.match( regexp )                   
            })
        })
    }

    render() {
        const { filterData } = this.state
        return (
            <div className="MovieForm">
                <ul>
                    <li><Link to="/Movie_All">전체</Link></li>
                    <li><Link to="/Movie_domestic">국내</Link></li>
                    <li><Link to="/Movie_oversea">해외</Link></li>
                </ul>
                {/* <MovieBar onTitle ={this.handleTitle} filterData={filterData}/> */}
                <Route path="/Movie_All" exact component={Movie_All} />
                <Route path="/Movie_domestic" component={Movie_domestic} />
                <Route path="/Movie_oversea" component={Movie_oversea} />
            </div>
        );
    }
}

export default MovieForm;