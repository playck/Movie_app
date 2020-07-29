// import React, { Component } from 'react';
// import Modal from './Modal';
// import './MovieBar.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import { faVideo } from '@fortawesome/free-solid-svg-icons';
// import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
// import { text } from '@fortawesome/fontawesome-svg-core';

// class MovieBar extends Component {

//     state = {
//         text: '',
//         visible: false
//     }

//     handleChange = (e) => {
//         const {name , value} = e.target
//         const { onTitle } = this.props
//         const { visible } = this.state
//         this.setState({
//             [name] : value
//         }, () => onTitle( this.state.text))
//     }

//     render() {
//         const { text } = this.state
//         const { filterData } = this.props

//         return (
//             <div className="result">
//                 <div className="MovieSearch">
//                     <input type="text" 
//                     placeholder="영화제목을 입력하세요"
//                     name = "text"
//                     value = { text }
//                     onChange = {this.handleChange}
//                     />                    
//                 </div>
//                 <div className="movie_result">
//                 {               
//                    filterData.map(movie => 
//                        <article key={movie.no}>
//                        <div className="card_top">
//                           <img src={movie.poster}/>  
//                           <div>
//                               <h3>{movie.title}</h3>
//                               <h4>감독: {movie.director}</h4>
//                               <h4>출연: {movie.actor}</h4>
//                               <p>개봉일: {movie.date} </p>
//                               <p>평점: {movie.rate}</p>
//                           </div>
//                        </div>
//                           <div className="card_bottom">
//                           <hr/>
//                               <div className="card_nav">
//                               <a onClick={ () => this.handleOpen(movie.no)}><span><FontAwesomeIcon icon={ faVideo }/> 예고편</span></a>
//                               <a href="https://www.megabox.co.kr/" target="_blank"><span><FontAwesomeIcon icon={ faTicketAlt }/> 예매하기</span></a>
//                               <a><span><FontAwesomeIcon icon={ faThumbsUp }/> 0 </span></a>
//                               </div>
//                           </div>
//                       </article>
//                    )
//                 }
//                 </div>
//             </div>
//         );
//     }
// }

// export default MovieBar;