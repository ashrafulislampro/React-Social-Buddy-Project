import { Link, useHistory } from 'react-router-dom';
import './Post.css';
const Post = (props) => {
          let history = useHistory();
          const showComments = commentId => {
                    history.push(`/comment/${commentId}`);
          }
          const {id, title, body} = props.post;
          
          return (
                    <div className='post_component'>
                              <h2><strong>Id : {id}</strong></h2>
                              <h3>{title}</h3>
                              <p>{body}</p>
                              <Link to={`/post/${id}`}>post details</Link>
                              <button onClick={() => showComments(id)}>comments</button>
                    </div>
          );
};

export default Post;