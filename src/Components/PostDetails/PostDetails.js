import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
          const {postId} = useParams();
          const [postDetails, setPostDetails] = useState({});
          useEffect(() => {
                    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                    .then(res => res.json())
                    .then(data => setPostDetails(data))
          },[postId]);
          
          return (
                    <div style={{textAlign: 'center'}}>
                              <h1>This is Post Details. {postId}</h1>
                              <hr />
                              <div style={{width : '600px', margin : 'auto', border : '1px solid gray'}}>
                                        <h2>Post Id : {postDetails.id}</h2>
                                        <h3>Title : {postDetails.title}</h3>
                                        <p>Body : {postDetails.body}</p>
                              </div>
                    </div>
          );
};

export default PostDetails;