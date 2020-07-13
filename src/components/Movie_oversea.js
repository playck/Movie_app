import React, { Component } from 'react';
import Data from './Data.json'
import './Movie_oversea.scss'
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

class Movie_oversea extends Component {
    state = {
        Movies : Data,
        flg: false,
        findData : {}
    }
    handleOpen = (no) => {
        this.setState({
            findData : this.state.Movies.find( item => item.no === no),
            flg : true
        })
    }

    handleClose = () => {
        this.setState({
            flg: false
        })
    }
    render() {
        const { Movies , flg , findData} = this.state
        return (
            <div className="Movie_content">
                {
                 Movies.map( movie =>
                    <article key={movie.no} >
                     <div className="card_top">
                        <img src={movie.poster}/>  
                        <div>
                            <h3>{movie.title}</h3>
                            <h4>감독: {movie.director}</h4>
                            <h4>출연: {movie.actor}</h4>
                            <p>개봉일: {movie.date} </p>
                            <p>평점: {movie.rate}</p>
                        </div>
                     </div>
                        <div className="card_bottom">
                        <hr/>
                            <div className="card_nav">
                            <a onClick={ () => this.handleOpen(movie.no)}><span><FontAwesomeIcon icon={ faVideo }/> 예고편</span></a>
                            <a href="https://www.megabox.co.kr/" target="_blank"><span><FontAwesomeIcon icon={ faTicketAlt }/> 예매하기</span></a>
                            <a><span><FontAwesomeIcon icon={ faThumbsUp }/> 10</span></a>
                            </div>
                        </div>
                    </article>
                    )
                }
                <Modal flg = { flg } onClose = {this.handleClose} findData = {findData} />
            </div>
        );
    }
}

export default Movie_oversea;