import React, { Component } from 'react';
import axios from 'axios';
import './MovieDays.scss'

class MovieDays extends Component {

    state = {
        isLoading: true,
        weeklyBoxOfficeList: [],
        text: '',
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
        console.log(value)
    }

    getMovies = async () => {
        const {
          data: {
            boxOfficeResult: {weeklyBoxOfficeList}
          }
        }
        = await axios.get(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20200726`)
        console.log(weeklyBoxOfficeList)
        this.setState({weeklyBoxOfficeList, isLoading: false})
    }

    componentDidMount() {
        this.getMovies()
    }    

    render() {
        const { isLoading , weeklyBoxOfficeList , text }  = this.state
        return (
            <div>
                <section className="container"> 
                {isLoading ? (<div className="loader"><span>영화 목록을 가져오고 있습니다..</span></div>) : (<div className="movie">
                <input type="text" name="text" value= {text}
                 onChange={this.handleChange}/>
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
                </section>
            </div>
        );
    }
}

export default MovieDays;