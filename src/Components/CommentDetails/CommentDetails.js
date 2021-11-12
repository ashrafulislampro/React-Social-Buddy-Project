import React from 'react';
import './CommentDetails.css';
const CommentDetails = (props) => {
          
          const {email, name, body, id} = props.comment;

          return (
                    <div className="comment_component">     
                              <h2>Comment Id : {id}</h2>
                              <h4>Name : {name}</h4>
                              <p>Email : {email}</p>
                              <p>Body : {body}</p>

                    </div>
          );
};

export default CommentDetails;