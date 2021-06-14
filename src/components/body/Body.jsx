import React from 'react';

import './body.css';
import Article from '../article/Article'


class Body extends React.Component {
    
    nbrArticles = (nbrArts) => {
        console.log(nbrArts)
    };

    render() {
        return (
            <div className='body_div'>
                    <Article titre='Les tartines' retoursNombreArticle={(num) => this.nbrArticles(num)}/>
                    <Article titre='CodingSchool' retoursNombreArticle={(num) => this.nbrArticles(num)}/>
            </div>
        );
    }
}

export default Body;