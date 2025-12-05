import { useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import data from '../data.json'
import '../postpage.css'

import CircleIcon from '@mui/icons-material/Circle';
import XIcon from '@mui/icons-material/X';
import FeedIcon from '@mui/icons-material/Feed';


function PostPage () {

  const {id} = useParams();
  const post = data.find(p => p.id === Number(id));
  const realted = data.filter(p => p.id !== Number(id));
  const navigate = useNavigate();

  return(
    <>
    <Header />
    <section className="main-section">

  <section className="post-first-section">
    <div className="post-first-main-container">

      <h1 className="post-nameOfPost">{post.title}</h1>

      <p className="post-descripPost">{post.description}</p>

      <div className="post-containerForDate">
        <p className="post-dateOfPost">{post.date}</p>
        <div className="post-authorOfPost">
          <CircleIcon className='author-icon-circle' />
          <span className="post-autor-Name">John Doe</span>
          </div>
      </div>

        <div className="post-container-post">
          <button className="post-container-post-button">Photo by Antara</button>
        </div>

        <div className="post-container-icons">
          <p className="post-text-icon">Share to</p>

          <div className='icon-wrapper-facebook facebook'>
            <ion-icon src="/logo-facebook.svg"></ion-icon>
          </div>

          <div className='icon-wrapper x-icon'>
            <XIcon className="x-svg"/>
          </div>

          <div className='icon-wrapper youtube'>
            <ion-icon src="/logo-youtube.svg"></ion-icon>
          </div>

        </div>
    </div>
  </section>



  <section className='post-second-section'>
    <div className="post-container-posts">
      <div className="post-article-container">
        <div className="title-article-icon"><span className='Feed-Icon'><FeedIcon /></span> <h3 className="post-title-article">Related Articles</h3></div>
        <button className="post-button-article">Read more</button>
      </div>

      {realted.map(r => (
        
      <div
      key={r.id} 
      className="post-container-small-post"
      onClick={() => navigate(`/post/${r.id}`)}
      >
        <div className="post-post-video"></div>
        <div className="post-post-info">
          <p className="post-post-data">{r.date}</p>
          <h3 className="post-post-name">{r.title}</h3>
          <p className="post-post-disc">{r.description}</p>
        </div>
      </div>
      ))}
      
    
    </div>
  </section>
  </section>
    
    </>
  )
};

export default PostPage;