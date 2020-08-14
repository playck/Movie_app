import React, { Component } from 'react';
import './MovieForm.scss'
import { Link, Route, HashRouter } from 'react-router-dom';
import Movie_All from './Movie_All';
import Movie_domestic from './Movie_domestic';
import Movie_oversea from './Movie_oversea';
import MovieDays from './MovieDays';


class MovieForm extends Component {
    state = {
        flg: false,
    }

    handleScreen = () => {
        const { flg } = this.state
        this.setState({
            flg: true
        })
    }

    render() {
        const { flg } = this.state
        return (
            <div className="MovieForm">
                <ul onClick={this.handleScreen}>
                    <li><Link to="/Movie_All">전체</Link></li>
                    <li><Link to="/Movie_domestic">국내</Link></li>
                    <li><Link to="/Movie_oversea">해외</Link></li>
                    <li><Link to="/MovieDays"> 일별 인기순위 </Link></li>
                </ul>
                <div className={`Movie_All ${flg && 'on'}`}><Movie_All /></div>
                <Route path="/Movie_All" exact component={Movie_All} />
                <Route path="/Movie_domestic" component={Movie_domestic} />
                <Route path="/Movie_oversea" component={Movie_oversea} />
                <Route path="/MovieDays" component={MovieDays}>
                </Route>
            </div>
        );
    }
}

export default MovieForm;