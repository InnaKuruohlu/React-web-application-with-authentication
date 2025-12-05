import { useNavigate } from 'react-router-dom';

function SmallPosts ({post}) {

const navigate = useNavigate();
  return(
    <>
      

      <div 
      className="container-small-post"
      onClick={() => navigate(`/post/${post.id}`)}
      >
        <div className="post-video"></div>
        <div className="post-info">
          <p className="post-data">{post.date}</p>
          <h4 className="post-name">{post.title}</h4>
          <p className="post-disc">{post.description}</p>
        </div>
      </div>

    
    </>
  );
};

export default SmallPosts;