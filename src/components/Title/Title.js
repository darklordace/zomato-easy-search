import React from 'react';
import question from './Question.png';
import './Title.css';

const Title = ({ onRouteChange }) => {
    return (
        <div id="title">
            <h1>
                Zomato Easy Search
                <img
                    src={question} alt=''height='35px'
                    onClick={() => onRouteChange('instructions')}
                ></img>
            </h1>
        </div>
    );
}

export default Title;