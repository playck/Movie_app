import React, { Component } from 'react';
import axios from 'axios';
import './MovieDays.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



class MovieDays extends Component {

    state = {
        isLoading: true,
        weeklyBoxOfficeList: [],
        date: "",
    }

    // 영화진흥위원회 API 가져오기

    getMovies = async () => {
        const {
          data: {
            boxOfficeResult: {weeklyBoxOfficeList}
          }
        }
        = await axios.get(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f73424077cfe12471436e35f8633ace8&targetDt=${this.state.date}`)
        this.setState({weeklyBoxOfficeList, isLoading: false})
    }

    handleChange = (e) => {
            this.setState ({
            date: e.target.value
        })
    }

    handleClick = () => {
        this.getMovies()
    } 

    render() {
        const { isLoading , weeklyBoxOfficeList , date  }  = this.state
        return (
            <div>
                <section className="container"> 
                <div>
                <h2> 영화 인기 순위 </h2>
                <p className="date"> 검색 날짜: { date } </p>
                <div className="inputBox">
                    <input type="text" onChange={this.handleChange} placeholder="( 예: 20200701 )"/>
                    <button onClick={this.handleClick}><FontAwesomeIcon icon={ faSearch }/></button>
                </div>
                    <div>
                {isLoading ? (<div className="loader"><span>원하는 날짜를 입력해주세요</span></div>) : (<div className="movie">
                {
                    weeklyBoxOfficeList.map((movie) => 
                       <div className="movielist"> 
                            {movie.rank}
                            <div className="movie_info">
                                {movie.movieNm} 
                                <div className="movie_detali">
                                <p>개봉일 : {movie.openDt}</p>
                                <p>관객수 : {movie.audiAcc} 명</p>
                                </div>
                            </div>
                        </div>
                    )   
                }

                </div>)}
                    </div>
                </div>
                </section>
            </div>
        );
    }
}

export default MovieDays;