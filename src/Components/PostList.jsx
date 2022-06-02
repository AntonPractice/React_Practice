import React from 'react';
import Postitem from './Postitem';

const PostList = function ({ posts, title, remove }) {
    // console.log(props);

    if(!posts.length){
        return (<h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>)
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            {posts.map((post,index) =>
                <Postitem remove={remove} number={index +1} post={post} key={post.id} />)}
        </div>
    );

};
export default PostList;