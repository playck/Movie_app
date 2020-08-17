import React, { Component } from 'react';
import axios from 'axios';
import './MovieDays.scss'

class MovieDays extends Component {

    state = {
        isLoading: true,
        weeklyBoxOfficeList: [],
        date: "20200816"
    }

    getMovies = async () => {
        const {
          data: {
            boxOfficeResult: {weeklyBoxOfficeList}
          }
        }
        = await axios.get(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=${this.state.date}`)
        console.log(weeklyBoxOfficeList)
        this.setState({weeklyBoxOfficeList, isLoading: false})
    }

    week = () => {
        this.setState({
            date: parseInt(this.state.date) - 7
        })
    }

    componentDidMount() {
        this.getMovies(this.state.date)
    }        

    render() {
        const { isLoading , weeklyBoxOfficeList , text }  = this.state
        return (
            <div>
                <section className="container"> 
                <div>
                <h2> 주간 영화 순위 </h2>
                <p class="date"> 기준 날짜: {this.state.date } </p>
                    <div>
                {isLoading ? (<div className="loader"><span>영화 목록을 가져오고 있습니다..</span></div>) : (<div className="movie">
                {
                    weeklyBoxOfficeList.map((movie) => 
                       <div className="movielist"> 
                            {movie.rank}
                            <div className="movie-info">
                                {movie.movieNm} 
                                <div className="movie-detali">
                                <p>개봉일 : {movie.openDt}</p>
                                <p>관객수 :  {movie.audiAcc} 명</p>
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