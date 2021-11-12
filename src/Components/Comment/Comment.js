import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CommentDetails from '../CommentDetails/CommentDetails';

const Comment = () => {
          const {commentId} = useParams();
          const [comments, setComments] = useState([]);
          useEffect(() => {
                    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${commentId}`)
                    .then( res => res.json())
                    .then( data => setComments(data));
          },[commentId]);
          console.log(comments);

          return (
                    <div style={{textAlign : 'center'}}>
                              <h1>Comments Details == {commentId}</h1>
                              <hr />
                              {
                                        comments.map(comment => <CommentDetails comment={comment} key={comment.id}></CommentDetails>)
                              }
                    </div>
          );
};

export default Comment;