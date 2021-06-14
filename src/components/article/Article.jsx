import React from 'react';

import './article.css'

class Article extends React.Component {

    showTitle = () => {
        console.log(this.props.titre);
    }

    nombreArticle = 42;

    render() {
        console.log(this.props);

        return (
            <div className='article_div'>
                <div className='article_div_left'>
                    <h1>{this.props.titre}</h1>
                    <img src="src/images/220px-Toast-2.jpg" alt="" />
                </div>
                <div className='article_div_right'>
                    <h1>Mon Premier Article</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas qui, culpa earum ratione, accusantium adipisci asperiores tempore repellendus ullam temporibus, illo odit. Rem, debitis? Provident sequi recusandae non corrupti praesentium dolorem sed, temporibus numquam molestias eaque illo vitae doloribus nesciunt aspernatur deserunt reprehenderit. Quos architecto rem atque iure cumque. Eligendi!</p>
                    <button onClick={this.showTitle}>Presh me</button>
                    <button onClick={() => this.props.retoursNombreArticle(this.nombreArticle)}>Combien d'articles?</button>
                </div>
            </div>
        );
    }
}

export default Article;