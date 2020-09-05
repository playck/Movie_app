import React, { Component } from 'react';
import Data_All from './Movie_Data/Data_All.json';
import './Movie_oversea.scss';
import Modal from './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

class Movie_All extends Component {
    state = {
        Movies : Data_All,
        flg: false,
        findData : {},
        text: ''
    }

    // 예고편 모달창 띄우기

    handleOpen = (no) => {
        this.setState({
            findData : this.state.Movies.find( item => item.no === no),
            flg : true
        })
    }

    // 예고편 모달창 닫기

    handleClose = () => {
        this.setState({
            flg: false
        })
    }

    //// 좋아요 UP 기능

    handleAdd = (no) => {
        const { Movies } = this.state
        this.setState({
            Movies : Movies.map(item => {
                if ( item.no === no) {
                    return {
                        ...item , 
                        count : item.count + 1
                    }
                } else {
                    return item
                }
            })
        })
    }

    componentDidMount() {
        const { Movies } = this.state
        this.setState({
            Movies : Movies.map (item => {
                return {
                    ...item ,
                    count : 0,
                }
            })
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
                            <p>감독: {movie.director}</p>
                            <p>출연: {movie.actor}</p>
                            <p>개봉일: {movie.date} </p>
                            <p>평점: {movie.rate}</p>
                        </div>
                     </div>
                        <div className="card_bottom">
                        <hr/>
                            <div className="card_nav">
                            <a onClick={ () => this.handleOpen(movie.no)}><span><FontAwesomeIcon icon={ faVideo }/> 예고편</span></a>
                            <a href="https://www.megabox.co.kr/" target="_blank"><span><FontAwesomeIcon icon={ faTicketAlt }/> 예매하기</span></a>
                            <a onClick={ () => this.handleAdd(movie.no)}><span><FontAwesomeIcon icon={ faThumbsUp }/> {movie.count}</span></a>
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

export default Movie_All;