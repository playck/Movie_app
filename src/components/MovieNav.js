import React from 'react';
import { Link } from 'react-router-dom';

function Navigtion() {
    return (
        <div className="MovieNav">
            <Link to="/MovieForm">국/내외 인기영화</Link>
            <Link to="/MovieForm_day">일별 영화순위 조회</Link>
        </div>
    )
}

export default Navigtion;