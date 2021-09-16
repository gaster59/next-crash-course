import React from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = ({articles}) => {
    return (
        <div>
            {articles.map((item,index) => (
                // <h3 key={index}>{item.title}</h3>
                <ArticleItem article={item} key={index} />
            ))}
        </div>
    );
};

export default ArticleList;