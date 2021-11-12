import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
          const [posts, setPosts] = useState([]);
          useEffect(() =>{
                    fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(res => res.json())
                    .then(data => setPosts(data))
          },[])
          return (
                    <div style={{textAlign : 'center'}}>
                              <h1>Total Loaded {posts.length} Posts.</h1>
                              <hr />
                              {
                                        posts.map(post => <Post post={post} key={post.id}></Post>)
                              }
                    </div>
          );
};

export default Home;