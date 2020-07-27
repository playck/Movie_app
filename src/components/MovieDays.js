import React, { Component } from 'react';
import axios from 'axios';

class MovieDays extends Component {

    state = {
        isLoading: true,
        weeklyBoxOfficeList: []
    }

    getMovies = async () => {
        const {
          data: {
            boxOfficeResult: {weeklyBoxOfficeList}
          }
        }
        = await axios.get('https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20200701')
        console.log(weeklyBoxOfficeList)
        this.setState({weeklyBoxOfficeList, isLoading: false})
    }

    componentDidMount() {
        this.getMovies()
    }
    

    render() {
        const { isLoading , weeklyBoxOfficeList }  = this.state
        return (
            <div>
                <section className="container"> 
                {isLoading ? (<div className="loader"><span>영화 목록을 가져오고 있습니다..</span></div>) : (<div className="movie">

                {
                    weeklyBoxOfficeList.map((movie) => 
                       <div> title = {movie.movieNm} </div>
                    )
                }

                </div>)}
                </section>
            </div>
        );
    }
}

export default MovieDays;